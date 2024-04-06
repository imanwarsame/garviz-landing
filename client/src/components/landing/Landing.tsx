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
			<>
				<Box
					component='div'
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						textAlign: 'center',
						width: '80%',
						zIndex: 2,
					}}
				>
					<Stack direction='column' spacing={1}>
						<Typography fontWeight='bold' sx={{ typography: { xs: 'h4', md: 'h2' } }}>
							Elevate your game to another planet
						</Typography>
						<Typography sx={{ typography: { xs: 'body2', md: 'h6' } }}>
							Use data to take your team to the next level. Gather. Visualise. Analyse.
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
					<Lottie animationData={darkMode ? animatedScrollLight : animatedScrollDark} height={200} width={200} />
				</Box>
			</>
		</Element>
	);
}
