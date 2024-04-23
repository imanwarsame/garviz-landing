import { Box, Hidden, useTheme } from '@mui/material';
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
import MobileNavbar from '../mobilenavbar/MobileNavbar';
import Navbar from '../navbar/Navbar';
import GatherImage from '../features/GatherImage';
import VisualiseImage from '../features/VisualiseImage';
import AnalyseImage from '../features/AnalyseImage';

export default function Home() {
	const parallax = useRef<IParallax>(null!);
	const theme = useTheme();

	return (
		<Box component='div' sx={{ overflowY: 'scroll' }}>
			<Hidden mdUp>
				{parallax.current && parallax.current.scrollTo && <MobileNavbar scrollTo={parallax.current.scrollTo} />}
			</Hidden>
			<Hidden mdDown>
				{parallax.current && parallax.current.scrollTo && <Navbar scrollTo={parallax.current.scrollTo} />}
			</Hidden>
			<Parallax ref={parallax} pages={6}>
				<ParallaxLayer offset={1} speed={1} style={{ backgroundColor: theme.palette.background.paper }} />
				<ParallaxLayer offset={2} speed={1} style={{ backgroundColor: theme.palette.background.paper }} />
				<ParallaxLayer offset={3} speed={1} style={{ backgroundColor: theme.palette.background.paper }} />
				<ParallaxLayer offset={4} speed={1} style={{ backgroundColor: theme.palette.background.paper }} />
				<ParallaxLayer offset={5} speed={1} style={{ backgroundColor: theme.palette.background.paper }} />
				<ParallaxLayer offset={6} speed={1} style={{ backgroundColor: theme.palette.background.paper }} />

				{/* <ParallaxLayer
					offset={0}
					speed={0}
					factor={5}
					style={{
						backgroundImage: url('stars', true),
						backgroundSize: 'cover',
					}}
				/> */}

				{/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
					<img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
				</ParallaxLayer> */}

				{/* <ParallaxLayer
					offset={2.5}
					speed={-0.4}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						pointerEvents: 'none',
					}}
				>
					<img src={url('earth')} style={{ width: '60%' }} />
				</ParallaxLayer> */}

				{/* <ParallaxLayer
					offset={2}
					speed={-0.3}
					style={{
						backgroundSize: '80%',
						backgroundPosition: 'center',
						backgroundImage: url('clients', true),
					}}
				/> */}

				{/* <animated.div style={textStyles}>
					<Box
						aria-label='gather-feature-image'
						component='img'
						src={GatherImage}
						sx={{
							position: 'absolute',
							top: '50%', //Centre vertically
							left: '5%', //Adjust distance from the left
							transform: 'translateY(-50%)', //Shift upward by half of its height
							width: '40%',
							zIndex: 2,
						}}
					></Box>
				</animated.div> */}

				{/* <ParallaxLayer offset={2} speed={-0.05}>
					<Box
						aria-label='visualise-feature-image'
						component='img'
						src={VisualiseImage}
						sx={{
							position: 'absolute',
							top: '50%', //Centre vertically
							left: '5%', //Adjust distance from the left
							transform: 'translateY(-50%)', //Shift upward by half of its height
							width: '40%',
							zIndex: 2,
						}}
					></Box>
				</ParallaxLayer> */}

				{/* <ParallaxLayer offset={3} speed={-0.05}>
					<Box
						aria-label='analyse-feature-image'
						component='img'
						src={AnalyseImage}
						sx={{
							position: 'absolute',
							top: '50%', //Centre vertically
							left: '5%', //Adjust distance from the left
							transform: 'translateY(-50%)', //Shift upward by half of its height
							width: '40%',
							zIndex: 2,
						}}
					></Box>
				</ParallaxLayer> */}

				<ParallaxLayer sticky={{ start: 1, end: 4 }}>
					{parallax.current && parallax.current.container && <GatherImage containerRef={parallax.current.container} />}
					{parallax.current && parallax.current.container && (
						<VisualiseImage containerRef={parallax.current.container} />
					)}
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
					<Landing />
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
				<ParallaxLayer
					offset={4}
					speed={0}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Pricing />
				</ParallaxLayer>

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
