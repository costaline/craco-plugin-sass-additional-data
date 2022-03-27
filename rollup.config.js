import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import pkg from './package.json'

export default [
	{
		input: 'src/index.js',
		output: {
			name: 'index',
			file: pkg.browser,
			format: 'umd',
		},
		plugins: [
			nodePolyfills(),
			resolve(),
			commonjs(),
			babel({
				exclude: ['node_modules/**'],
				babelHelpers: 'bundled',
			}),
		],
	},
	{
		input: 'src/index.js',
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
			nodePolyfills(),
			babel({
				exclude: ['node_modules/**'],
				babelHelpers: 'bundled',
			}),
		],
	},
]
