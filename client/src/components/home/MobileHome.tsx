import { Box, Stack, Typography } from '@mui/material';
import Landing from '../landing/Landing';
import GatherImage from '../../assets/Gather.png';
import VisualiseImage from '../../assets/Visualise.png';
import AnalyseImage from '../../assets/Analyse.png';
import Pricing from '../pricing/Pricing';
import Contact from '../contact/Contact';
import MobileNavbar from '../mobilenavbar/MobileNavbar';
import Sparticles from '../particles/Sparticles';

export default function MobileHome() {
	return (
		<Box component='div' sx={{ overflow: 'hidden', width: '100vw' }}>
			<MobileNavbar />
			<Stack direction='column'>
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
					<Landing />
				</Box>
				<Box
					component='div'
					aria-label='gather-feature'
					sx={{
						position: 'relative',
						height: '100vh',
						width: '100vw',
						overflow: 'hidden',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						background: 'transparent',
						backdropFilter: 'blur(2px)',
					}}
				>
					<Stack direction='column' spacing={1} alignItems='center' textAlign='center'>
						<Box
							aria-label='gather-feature-image'
							component='img'
							src={GatherImage}
							sx={{
								width: '90vw',
							}}
						></Box>
						<Typography fontWeight='bold' sx={{ typography: { xs: 'h5', md: 'h2' } }}>
							Gather
						</Typography>
						<Typography sx={{ typography: { xs: 'caption', md: 'h6' }, width: '75vw' }}>
							An intuitive platform to gather all the raw data for your team
						</Typography>
					</Stack>
				</Box>
				<Box
					component='div'
					aria-label='visualise-feature'
					sx={{
						position: 'relative',
						height: '100vh',
						width: '100vw',
						overflow: 'hidden',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						background: 'transparent',
						backdropFilter: 'blur(2px)',
					}}
				>
					<Stack direction='column' spacing={1} alignItems='center' textAlign='center'>
						<Box
							aria-label='visualise-feature-image'
							component='img'
							src={VisualiseImage}
							sx={{
								width: '90vw',
							}}
						></Box>
						<Typography fontWeight='bold' sx={{ typography: { xs: 'h5', md: 'h2' } }}>
							Visualise
						</Typography>
						<Typography sx={{ typography: { xs: 'caption', md: 'h6' }, width: '75vw' }}>
							Easily visualise how your team is performing and where you can improve
						</Typography>
					</Stack>
				</Box>
				<Box
					component='div'
					aria-label='analyse-feature'
					sx={{
						position: 'relative',
						height: '100vh',
						width: '100vw',
						overflow: 'hidden',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						background: 'transparent',
						backdropFilter: 'blur(2px)',
					}}
				>
					<Stack direction='column' spacing={1} alignItems='center' textAlign='center'>
						<Box
							aria-label='analyse-feature-image'
							component='img'
							src={AnalyseImage}
							sx={{
								width: '90vw',
							}}
						></Box>
						<Typography fontWeight='bold' sx={{ typography: { xs: 'h5', md: 'h2' } }}>
							Analyse
						</Typography>
						<Typography sx={{ typography: { xs: 'caption', md: 'h6' }, width: '75vw' }}>
							Use our advanced analytics engine to take your team to the next level
						</Typography>
					</Stack>
				</Box>
				<Pricing />
				<Box component='div' sx={{ background: 'transparent', backdropFilter: 'blur(3px)' }}>
					<Contact />
				</Box>
			</Stack>
		</Box>
	);
}
