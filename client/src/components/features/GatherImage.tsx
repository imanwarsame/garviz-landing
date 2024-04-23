import { Box, SxProps, Theme } from '@mui/material';
import GatherPNG from '../../assets/Gather.png';
import React, { useState } from 'react';
import { useScroll } from '@react-spring/web';

export default function GatherImage({ containerRef }: { containerRef: React.MutableRefObject<HTMLDivElement> }) {
	const [imageOpacity, setImageOpacity] = useState<SxProps<Theme>>({ opacity: 1 });

	useScroll({
		container: containerRef,
		onChange: ({ value: { scrollYProgress } }) => {
			console.log(scrollYProgress);

			if (scrollYProgress > 0.1 && scrollYProgress < 0.3) {
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
			aria-label='gather-feature-image'
			component='img'
			src={GatherPNG}
			sx={{
				...imageOpacity,
				position: 'sticky',
				top: '50%', //Centre vertically
				left: '5%', //Adjust distance from the left
				transform: 'translateY(-50%)', //Shift upward by half of its height
				width: '40%',
				zIndex: 2,
			}}
		></Box>
	);
}
