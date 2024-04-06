import { Canvas } from '@react-three/fiber';
import { Box } from '@mui/material';
import NoiseSphere from './NoiseSphere';
import { Element } from 'react-scroll';
import { Suspense } from 'react';
import Landing from '../landing/Landing';
// import { OrbitControls } from '@react-three/drei';
// import { Perf } from 'r3f-perf';

export default function Planet() {
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
				<Canvas camera={{ position: [0, 0, 20] }} resize={{ scroll: false }}>
					{/* <OrbitControls /> */}
					<axesHelper args={[1]} />
					{/* {import.meta.env.DEV && <Perf position='bottom-right' />} */}
					{/* <ambientLight intensity={2} /> */}
					{/* <directionalLight position={[3, 0.0, 0.0]} intensity={50} /> */}
					<Suspense fallback={null}>
						<NoiseSphere frequency={0.2} position={[0, 0, 0]} />
					</Suspense>
				</Canvas>
				<Landing />
			</Box>
		</Element>
	);
}
