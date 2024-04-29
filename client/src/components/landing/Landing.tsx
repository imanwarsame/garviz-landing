import { Box, Stack, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import animatedScrollDark from '../../assets/scroll-down-dark.json';
import animatedScrollLight from '../../assets/scroll-down-light.json';
import { useDevStore } from '../../store';
import { Element } from 'react-scroll';
import { ParallaxLayer } from '@react-spring/parallax';
import Sparticles from '../particles/Sparticles';

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
					overflow: 'hidden',
				}}
			>
				<Sparticles />
				<Box component='div'>
					<ParallaxLayer speed={2}>
						<Box
							aria-label='landing-page-text'
							component='div'
							sx={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								textAlign: 'center',
								zIndex: 2,
							}}
						>
							<Stack
								direction='column'
								spacing={1}
								sx={{
									// backdropFilter: darkMode ? 'none' : 'blur(5px)',
									backgroundColor: 'transparent',
									paddingBottom: '10px',
									paddingX: '8px',
									width: '90vw',
								}}
							>
								<Typography fontWeight='bold' sx={{ typography: { xs: 'h4', md: 'h2' } }}>
									Elevate your game to another planet
								</Typography>
								<Typography
									sx={{
										typography: { xs: 'body2', md: 'h6' },
									}}
								>
									Use data to take your team to the next level. Gather. Visualise. Analyse.
								</Typography>
							</Stack>
						</Box>
					</ParallaxLayer>
					<Box
						component='div'
						display='flex'
						alignItems='center'
						justifyContent='center'
						sx={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
					>
						<Lottie animationData={darkMode ? animatedScrollLight : animatedScrollDark} height={200} width={200} />
					</Box>
				</Box>
			</Box>
		</Element>
	);
}
