import { GroupProps, MeshProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface NoiseSphereProps extends MeshProps {
	frequency?: number;
}

export default function NoiseSphere({ frequency = 1.0, ...props }: NoiseSphereProps & GroupProps) {
	const sphereRef = useRef<THREE.Points>(null!);

	useFrame(({ mouse, camera }) => {
		camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 1, 0.03);
		camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 1.6, 0.01);
		camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(8, Math.abs(mouse.x * mouse.y * 4)), 0.01);
		camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001);
	});

	useFrame((_, delta) => {
		// sphereRef.current.rotation.x += 1 * delta;
		sphereRef.current.rotation.y += frequency * delta;
	});

	return (
		<group {...props}>
			<points ref={sphereRef}>
				<icosahedronGeometry args={[4, 24]} />
				<pointsMaterial color='#5786F5' size={0.015} sizeAttenuation />
			</points>
		</group>
	);
}
