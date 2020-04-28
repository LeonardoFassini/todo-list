const presets = ['@babel/react', '@babel/typescript', ['@babel/env', { modules: false }]];

const plugins = [
	[
		'module-resolver',
		{
			root: ['./src'],
			alias: {
				'@app': ['./src/app'],
				'@atomic': ['./src/atomic'],
			},
		},
	],
	'babel-plugin-styled-components',
	'@babel/plugin-proposal-object-rest-spread',
	'@babel/plugin-proposal-optional-chaining',
	'@babel/plugin-proposal-nullish-coalescing-operator',
];

module.exports = { presets, plugins };
