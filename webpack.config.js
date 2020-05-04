const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/app/modules/app/index.tsx',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html',
		}),
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist/public'),
	},
	devServer: {
		compress: true,
		port: 5000,
		historyApiFallback: true,
		publicPath: '/',
		contentBase: false,
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.ts$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-typescript'],
					},
				},
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'css-loader',
				},
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'assets/fonts/',
				},
			},
		],
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		extensions: ['.ts', '.tsx', '.js', '.json'],
		alias: {
			'@app': path.resolve(__dirname, './src/app'),
			'@atomic': path.resolve(__dirname, './src/atomic'),
		},
	},
	devtool: 'source-map',
};
