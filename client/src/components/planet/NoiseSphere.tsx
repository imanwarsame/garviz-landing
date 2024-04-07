import { MeshProps, useFrame } from '@react-three/fiber';
// import { useControls } from 'leva';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { noiseSphereShaderMaterial } from './NoiseSphereShaderMaterial';
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
		}
	});

	useFrame(({ mouse, camera }) => {
		camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03);
		camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01);
		camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(5, Math.abs(mouse.x * mouse.y * 4)), 0.01);
		camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001);
	});

	// useFrame((_, delta) => {
	// 	// sphereRef.current.rotation.x += 1 * delta;
	// 	sphereRef.current.rotation.y += frequency * delta;
	// });

	return (
		<mesh {...props} ref={sphereRef}>
			<icosahedronGeometry attach='geometry' args={[2, 12]} />
			<primitive object={material} attach='material' />
		</mesh>
	);
}
