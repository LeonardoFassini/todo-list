// const path = require('path');

// const custom = require('../webpack.config.js');

// module.exports = {
// 	stories: ['../src/**/*.story.tsx'],
// 	webpackFinal: (config) => {
// 		console.log('pipoquinha');
// 		return {
// 			...config,
// 			module: { ...config.module, rules: custom.module.rules },
// 			resolve: {
// 				...config.resolve,
// 				modules: [path.resolve(__dirname, 'src'), 'node_modules'],
// 				extensions: ['.ts', '.tsx', '.js', '.json'],
// 				alias: {
// 					'@app': path.resolve(__dirname, './src/app'),
// 					'@atomic': path.resolve(__dirname, './src/atomic'),
// 				},
// 			},
// 		};
// 	},
// };
