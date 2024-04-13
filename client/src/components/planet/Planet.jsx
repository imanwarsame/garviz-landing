import { useFrame, extend } from '@react-three/fiber';
import { LayerMaterial, Depth, Fresnel } from 'lamina';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
// import { OrbitControls } from '@react-three/drei';

import CustomLayer from './CustomLayer';
import { useDevStore } from '../../store';

extend({ CustomLayer });

const Planet = () => {
	const materialRef = useRef();
	const { darkMode } = useDevStore();

	const colourA = darkMode ? '#124DD8' : '#124DD8';
	const colourB = darkMode ? '#2BFFE7' : '#2BFFE7';
	const cloudTint = darkMode ? '#001741' : '#001741';
	const fresnelColour = darkMode ? '#FFDEF0' : '#FFDEF0';

	useFrame((state) => {
		const { clock } = state;
		materialRef.current.time = clock.getElapsedTime();
	});

	return (
		<mesh position={[0, 0, 0]} rotation={[0, 8 * Math.PI, 0]} scale={1.5}>
			<icosahedronGeometry args={[1, 10]} />
			<LayerMaterial lighting='lambert'>
				{/* First layer is our own custom layer that's based of the FBM shader */}
				{/* 
					Notice how we can use *any* uniforms as prop here 👇
					You can tweak the colors by adding a colorA or colorB prop!
				*/}
				<customLayer
					ref={materialRef}
					time={0.0}
					lacunarity={2.3}
					colorA={colourA}
					colorB={colourB}
					cloudTint={cloudTint}
				/>
				{/* Second layer is a depth based gradient that we "add" on top of our custom layer*/}
				<Depth colorA='blue' colorB='aqua' alpha={0.9} mode='add' />
				{/* Third Layer is a Fresnel shading effect that we add on*/}
				<Fresnel color={fresnelColour} mode='add' />
			</LayerMaterial>
		</mesh>
	);
};

const Scene = () => {
	return (
		<Canvas camera={{ position: [0.0, 0.0, 5.0] }}>
			<ambientLight intensity={0.03} />
			<directionalLight position={[0.3, 0.15, 0.1]} intensity={2} />
			<Suspense fallback={null}>
				<Planet />
			</Suspense>
			{/* <OrbitControls /> */}
		</Canvas>
	);
};

export default Scene;
