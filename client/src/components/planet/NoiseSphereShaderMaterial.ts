import * as THREE from 'three';
import { vertexShader } from './vertexShader';
import { fragmentShader } from './fragmentShader';

const settings = {
	colourA: new THREE.Color('#124dd8'),
	colourAdark: new THREE.Color('#2bffe7'),
	colourB: new THREE.Color('#2bffe7'),
	cloudTint: new THREE.Color('#001741'),
	gain: 0.5,
	lacunarity: 2.0,
	time: 0.0,
};

export const noiseSphereShaderMaterial = (darkMode: boolean) =>
	new THREE.ShaderMaterial({
		uniforms: {
			u_colorA: { value: darkMode ? settings.colourAdark : settings.colourA },
			u_colorB: { value: settings.colourB },
			u_cloudTint: { value: settings.cloudTint },
			u_gain: { value: settings.gain },
			u_lacunarity: { value: settings.lacunarity },
			u_time: { value: settings.time },
		},
		vertexShader: vertexShader,
		fragmentShader: fragmentShader,
	});
