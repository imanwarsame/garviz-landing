import { Box, SxProps, Theme } from '@mui/material';
import VisualisePNG from '../../assets/Visualise.png';
import React, { useState } from 'react';
import { useScroll } from '@react-spring/web';

export default function VisualiseImage({ containerRef }: { containerRef: React.MutableRefObject<HTMLDivElement> }) {
	const [imageOpacity, setImageOpacity] = useState<SxProps<Theme>>({ opacity: 0 });

	useScroll({
		container: containerRef,
		onChange: ({ value: { scrollYProgress } }) => {
			if (scrollYProgress > 0.29 && scrollYProgress <= 0.5) {
				setImageOpacity({ opacity: 1, transition: 'opacity 0.5s ease-in-out' });
			} else {
				setImageOpacity({ opacity: 0, transition: 'opacity 0.5s ease-in-out' });
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
				width: '40vw',
				top: '50%', //Centre vertically
				left: '5%', //Adjust distance from the left
				transform: 'translateY(-50%)', //Shift upward by half of its height
				zIndex: 2,
			}}
		></Box>
	);
}
