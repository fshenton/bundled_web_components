const path = require("path");

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");


function buildConfig(env, args){
	const { mode } = args;

	let modeOptions;
	switch (mode) {
		case "development":
			modeOptions = { 
				mode: "development",
				output: {
					filename: "bundle.js",
					path: dist,
					publicPath: "/" //root
				},
				devServer: {
					contentBase: dist
				}
			}
			break;

		case "production":
		default:
			modeOptions = { 
				mode: "production",
				output: {
					filename: "bundle.js",
					path: dist,
					publicPath: "./"
				},
			}
			break;
	}

	const config = { 
		entry: `${src}/index.js`,
		...modeOptions,
		module: { 
			rules: [ 
				{ 
					test: /\.scss$/,
					use: [
						{
							loader: "style-loader"
						}, {
							loader: "css-loader",
							options: {
								modules: {
									localIdentName: "[folder]__[local]"
								}
							}
						}, {
							loader: "sass-loader"
						}
					]
				}
			]
		}
	};

	return config;
}


module.exports = buildConfig;