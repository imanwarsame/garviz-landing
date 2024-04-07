import { Abstract } from 'lamina/vanilla';
import { vertexShader } from './vertexShader';
import { fragmentShader } from './fragmentShader';

class CustomLayer extends Abstract {
	// Define stuff as static properties!

	// Uniforms: Must begin with prefix "u_".
	// Assign them their default value.
	// Any unifroms here will automatically be set as properties on the class as setters and getters.
	// There setters and getters will update the underlying unifrom.
	static u_colorA = '#124dd8';
	static u_colorB = '#2bffe7';
	static u_cloudTint = '#001741';
	static u_gain = 0.5;
	static u_lacunarity = 2.0;
	static u_time = 0.0;

	// Define your fragment shader just like you already do!
	// Only difference is, you must return the final color of this layer
	static fragmentShader = fragmentShader;

	// Optionally Define a vertex shader!
	// Same rules as fragment shaders, except no blend modes.
	// Return a non-projected vec3 position.
	static vertexShader = vertexShader;

	constructor(props) {
		// You MUST call 'super' with the current constructor as the first argument.
		// Second argument is optional and provides non-uniform parameters like blend mode, name and visibility.
		super(CustomLayer, {
			name: 'CustomLayer',
			...props,
		});
	}
}

export default CustomLayer;
