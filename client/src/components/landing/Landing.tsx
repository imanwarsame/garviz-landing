import { Box, Stack, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import animatedScrollDark from '../../assets/scroll-down-dark.json';
import animatedScrollLight from '../../assets/scroll-down-light.json';
import { useDevStore } from '../../store';
import { Element } from 'react-scroll';

export default function Landing() {
	const { darkMode } = useDevStore();

	return (
		<Element name='home_element'>
			<Box
				component='div'
				sx={{
					position: 'relative',
					height: '100svh',
					width: '100vw',
					overflowX: 'hidden',
					opacity: 0.9,
				}}
			>
				<Box
					component='div'
					sx={{
						position: 'absolute',
						top: '50%',
						left: { xs: '10%', md: '2%' },
						zIndex: 2,
					}}
				>
					<Stack direction='column' spacing={1}>
						<Typography fontWeight='bold' sx={{ typography: { xs: 'h2', md: 'h2' } }}>
							Landing page
						</Typography>
					</Stack>
				</Box>
				<Box
					component='div'
					display='flex'
					alignItems='center'
					justifyContent='center'
					sx={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
				>
					<Lottie
						animationData={darkMode ? animatedScrollLight : animatedScrollDark}
						height={200}
						width={200}
						style={{ color: 'orange' }}
					/>
				</Box>
			</Box>
		</Element>
	);
}
