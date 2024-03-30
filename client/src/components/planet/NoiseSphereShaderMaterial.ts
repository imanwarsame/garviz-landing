import * as THREE from 'three';
import { vertexShader } from './vertexShader';
import { fragmentShader } from './fragmentShader';

const settings = {
	colourLight: '#124dd8',
	colourDark: '#124dd8',
	octaves: 6,
	time: 1.0,
};

export const noiseSphereShaderMaterial = (darkMode: boolean) =>
	new THREE.ShaderMaterial({
		uniforms: {
			uColor: { value: darkMode ? settings.colourDark : settings.colourLight },
			uOctaves: { value: settings.octaves },
			uTime: { value: settings.time },
		},
		vertexShader: vertexShader,
		fragmentShader: fragmentShader,
	});
