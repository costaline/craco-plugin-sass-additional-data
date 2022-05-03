import babel from '@rollup/plugin-babel'
import clear from 'rollup-plugin-clear'

import pkg from './package.json'

export default {
	input: 'src/index.js',
	external: ['path'],
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			exports: 'auto',
		},
		{
			file: pkg.module,
			format: 'es',
			exports: 'auto',
		},
	],
	plugins: [
		clear({
			targets: ['lib'],
		}),
		babel({
			exclude: ['node_modules/**'],
			babelHelpers: 'bundled',
		}),
	],
}

