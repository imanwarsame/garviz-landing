import { Box, useTheme } from '@mui/material';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useRef } from 'react';
import Landing from '../landing/Landing';
import Gather from '../features/Gather';
import Visualise from '../features/Visualise';
// import GatherImage from '../../assets/Gather.png';
// import VisualiseImage from '../../assets/Visualise.png';
// import AnalyseImage from '../../assets/Analyse.png';
import Analyse from '../features/Analyse';
import Pricing from '../pricing/Pricing';
import Contact from '../contact/Contact';
import Navbar from '../navbar/Navbar';
import GatherImage from '../features/GatherImage';
import VisualiseImage from '../features/VisualiseImage';
import AnalyseImage from '../features/AnalyseImage';
import Sparticles from '../particles/Sparticles';

export default function Home() {
	const parallax = useRef<IParallax>(null!);
	const theme = useTheme();

	return (
		<Box component='div' sx={{ overflowY: 'scroll' }}>
			{parallax.current && parallax.current.scrollTo && <Navbar scrollTo={parallax.current.scrollTo} />}

			<Parallax ref={parallax} pages={6}>
				{/* These are the paper backgrounds behind each section */}
				<ParallaxLayer offset={1} speed={1} style={{ backgroundColor: theme.palette.background.paper }} />
				<ParallaxLayer offset={2} speed={1} style={{ backgroundColor: theme.palette.background.paper }} />
				<ParallaxLayer offset={3} speed={1} style={{ backgroundColor: theme.palette.background.paper }} />
				<ParallaxLayer offset={5} speed={1} style={{ backgroundColor: theme.palette.background.paper }} />
				<ParallaxLayer offset={6} speed={1} style={{ backgroundColor: theme.palette.background.paper }} />
				<ParallaxLayer offset={7} speed={1} style={{ backgroundColor: theme.palette.background.paper }} />

				{/* Sticky images */}
				<ParallaxLayer sticky={{ start: 0, end: 4 }}>
					{parallax.current && parallax.current.container && <GatherImage containerRef={parallax.current.container} />}
				</ParallaxLayer>

				<ParallaxLayer sticky={{ start: 0, end: 4 }}>
					{parallax.current && parallax.current.container && (
						<VisualiseImage containerRef={parallax.current.container} />
					)}
				</ParallaxLayer>

				<ParallaxLayer sticky={{ start: 0, end: 4 }}>
					{parallax.current && parallax.current.container && <AnalyseImage containerRef={parallax.current.container} />}
				</ParallaxLayer>

				{/* This is page 1 */}
				<ParallaxLayer
					offset={0}
					speed={0}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Box
						component='div'
						sx={{
							position: 'relative',
							height: '100svh',
							width: '100vw',
							overflow: 'hidden',
						}}
					>
						<Sparticles canInteract={true} />
						<ParallaxLayer speed={2}>
							<Landing />
						</ParallaxLayer>
					</Box>
				</ParallaxLayer>

				{/* This is page 2 */}
				<ParallaxLayer
					offset={1}
					speed={0}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Gather />
				</ParallaxLayer>

				{/* This is page 3 */}
				<ParallaxLayer
					offset={2}
					speed={0}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Visualise />
				</ParallaxLayer>

				{/* This is page 4*/}
				<ParallaxLayer
					offset={3}
					speed={0}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Analyse />
				</ParallaxLayer>

				{/* This is page 5*/}
				{/* <ParallaxLayer
					offset={4}
					speed={0}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Pricing />
				</ParallaxLayer> */}

				{/* This is page 6*/}
				<ParallaxLayer
					offset={5}
					speed={0}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Contact />
				</ParallaxLayer>
			</Parallax>
		</Box>
	);
}
