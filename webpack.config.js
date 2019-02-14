const webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')
const ip = require('ip')

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
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
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'React Typescript Example',
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}
