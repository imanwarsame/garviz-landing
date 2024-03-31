import { MeshProps, useFrame } from '@react-three/fiber';
// import { useControls } from 'leva';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { noiseSphereShaderMaterial } from './NoiseSphereShaderMaterial';
import { useMediaQuery, useTheme } from '@mui/material';
import { useDevStore } from '../../store';

interface NoiseSphereProps extends MeshProps {
	frequency?: number;
	amplitude?: number;
	speed?: number;
	density?: number;
	strength?: number;
	intensity?: number;
}

export default function NoiseSphere({ frequency = 1.0, ...props }: NoiseSphereProps) {
	const sphereRef = useRef<THREE.Mesh>(null!);
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
	const { darkMode } = useDevStore();

	// // Use Leva controls
	// const {
	// 	Frequency: levaFrequency,
	// } = useControls({
	// 	Frequency: { value: frequency, min: 0, max: 10, step: 0.1 },
	// });

	//Apply the custom material to the mesh
	const material = useMemo(() => noiseSphereShaderMaterial(darkMode), [darkMode]);

	//Use useFrame to update the shader uniforms
	useFrame((state) => {
		const { clock } = state;
		if (sphereRef.current && material && material.uniforms) {
			material.uniforms.u_time.value = frequency * clock.getElapsedTime();

			// //Leva version
			// material.uniforms.uTime.value = levaFrequency * clock.getElapsedTime();
		}
	});

	/* Adjust the position of the sphere based on the screen size. */
	useEffect(() => {
		// if (isSmallScreen) {
		// 	sphereRef.current.position.x = 12;
		// 	sphereRef.current.position.y = 0;
		// } else if (isMediumScreen) {
		// 	sphereRef.current.position.x = 8;
		// 	sphereRef.current.position.y = 0;
		// } else {
		// 	sphereRef.current.position.x = 12;
		// 	sphereRef.current.position.y = 0;
		// }
	}, [isSmallScreen, isMediumScreen]);

	return (
		<mesh {...props} ref={sphereRef}>
			<icosahedronGeometry attach='geometry' args={[2, 12]} />
			<primitive object={material} attach='material' />
		</mesh>
	);
}
