import {$path} from "./path.js";
import {resolve, dirname} from "path";

const webpackConfig = {
	entry: $path.src.js,
	output: {
		path: resolve(dirname($path.build.js)),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules|bower_components/,
				use: {
					loader: 'babel-loader',
				},
				resolve: {
					fullySpecified: false,
				}
			},
		],
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: 'initial',
					test: /node_modules|bower_components/,
					name: 'vendor',
					enforce: true,
				},
			},
		},
	},
	devtool: 'source-map',
};

export {webpackConfig}
