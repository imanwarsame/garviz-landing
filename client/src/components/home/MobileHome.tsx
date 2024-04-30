import { Box, Stack } from '@mui/material';
import Landing from '../landing/Landing';
import Gather from '../features/Gather';
import Visualise from '../features/Visualise';
// import GatherImage from '../../assets/Gather.png';
// import VisualiseImage from '../../assets/Visualise.png';
// import AnalyseImage from '../../assets/Analyse.png';
import Analyse from '../features/Analyse';
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
				<Gather />
				<Visualise />
				<Analyse />
				<Pricing />
				<Box component='div' sx={{ background: 'transparent', backdropFilter: 'blur(5px)' }}>
					<Contact />
				</Box>
			</Stack>
		</Box>
	);
}
