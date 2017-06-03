const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');

const prod_dir = '/dist/web/';

const html_test_dev_dir = './src/html/';
const html_test_prod_dir = '/dist/web/';

module.exports = {
	entry: {
		main: './src/entry',
	},
	output: {
		path: __dirname + prod_dir + 'assets',
		publicPath: '/assets/',
		filename:  '[name].[chunkhash].js',
	},
	devServer: {
	  contentBase: path.join(__dirname, 'dist/web'),
	  watchContentBase: true,
	  publicPath: '/assets/',
	  historyApiFallback: true,
	  compress: true,
	  hot: true,
	  port: 9000,	  	  
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					plugins: ["transform-decorators-legacy"],
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions'
			},
		]
	},
	resolve:{
		modules: ['node_modules', './src/common'],
		extensions: ['.js', '.jsx']
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename: '../index.html',
			template: html_test_dev_dir + 'index.html',
		}),
		new WebpackCleanupPlugin({
			exclude: ['*.css']
		}),
		new LiveReloadPlugin({
			port: 35729,
			appendScriptTag: true,
		}),
		/*new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings: false
			}
		})*/
	]
};
