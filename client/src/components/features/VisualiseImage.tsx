import { Box, SxProps, Theme } from '@mui/material';
import VisualisePNG from '../../assets/Visualise.png';
import React, { useState } from 'react';
import { useScroll } from '@react-spring/web';

export default function VisualiseImage({ containerRef }: { containerRef: React.MutableRefObject<HTMLDivElement> }) {
	const [imageOpacity, setImageOpacity] = useState<SxProps<Theme>>({ opacity: 1 });

	useScroll({
		container: containerRef,
		onChange: ({ value: { scrollYProgress } }) => {
			console.log(scrollYProgress);

			if (scrollYProgress > 0.3 && scrollYProgress < 0.5) {
				setImageOpacity({ opacity: 1, transition: 'opacity 1s ease-in-out' });
			} else {
				setImageOpacity({ opacity: 0, transition: 'opacity 1s ease-in-out' });
			}
		},
		default: {
			immediate: true,
		},
	});

	return (
		<Box
			aria-label='visualise-feature-image'
			component='img'
			src={VisualisePNG}
			sx={{
				...imageOpacity,
				position: 'sticky',
				top: '50%', //Centre vertically
				right: '20%', //Adjust distance from the left
				transform: 'translateY(-50%)', //Shift upward by half of its height
				width: '40%',
				zIndex: 2,
				border: 2,
			}}
		></Box>
	);
}