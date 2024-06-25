import { Box, Button, Hidden, Stack, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import animatedScrollDark from '../../assets/scroll-down-dark.json';
import animatedScrollLight from '../../assets/scroll-down-light.json';
import { useDevStore } from '../../store';

export default function Landing() {
	const { darkMode } = useDevStore();

	return (
		<Box component='div'>
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
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Typography fontWeight='bold' sx={{ typography: { xs: 'h4', md: 'h2' } }}>
						ELEVATE YOUR GAME
					</Typography>
					<Typography
						sx={{
							typography: { xs: 'body2', md: 'h6', paddingBottom: '50px' },
						}}
					>
						Use data to take your team to the next level. Gather. Visualise. Analyse.
					</Typography>
					<Hidden mdUp>
						<Button
							variant='contained'
							disableElevation
							sx={{ borderRadius: 8, width: '50%' }}
							onClick={() => console.log('')}
						>
							COMING SOON
						</Button>
					</Hidden>
				</Stack>
			</Box>
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
	);
}
