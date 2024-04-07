import { useFrame, extend } from '@react-three/fiber';
import { LayerMaterial, Depth, Fresnel } from 'lamina';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
// import { OrbitControls } from '@react-three/drei';

import CustomLayer from './CustomLayer';

extend({ CustomLayer });

const Planet = () => {
	const materialRef = useRef();

	useFrame((state) => {
		const { clock } = state;
		materialRef.current.time = clock.getElapsedTime();
	});

	return (
		<mesh position={[0, 0, 0]} rotation={[0, 8 * Math.PI, 0]} scale={1.5}>
			<icosahedronGeometry args={[2, 11]} />
			<LayerMaterial lighting='lambert'>
				{/* First layer is our own custom layer that's based of the FBM shader */}
				{/* 
					Notice how we can use *any* uniforms as prop here 👇
					You can tweak the colors by adding a colorA or colorB prop!
				*/}
				<customLayer ref={materialRef} time={0.0} lacunarity={2.3} />
				{/* Second layer is a depth based gradient that we "add" on top of our custom layer*/}
				<Depth colorA='blue' colorB='aqua' alpha={0.9} mode='add' />
				{/* Third Layer is a Fresnel shading effect that we add on*/}
				<Fresnel color='#FEB3D9' mode='add' />
			</LayerMaterial>
		</mesh>
	);
};

const Scene = () => {
	return (
		<Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
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
