const webpack = require('webpack')
const path = require('path')
const ip = require('ip')

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    host: ip.address(),
    port: 8080,
    hot: true,
  },

  //Enable sourcemaps for debugging webpacks output
  devtool: "source-map",

  resolve: {
    //Add '.ts' and  'tsx' as resolvable extensions
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      //All files with a '.ts or ',tsx' extension will be handled by awesome-typescript-loader
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      //A All output '.js files will have any sourcemaps re-processed by 'source-map-loader
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
}
