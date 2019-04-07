const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
    ]
  },
  output: {
    path: path.resolve(__dirname, "../client/build"),
    publicPath: '/',
    filename: 'static/js/[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../client/assets/index.html"),
      inject: 'body'
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, "../client/assets"),
      to: path.resolve(__dirname, "../client/build/static"),
      ignore: [ "index.html" ]
      // ignore: [ "uploads/**/*" ] don't move uploads folder
    }])
  ],
  performance: {
    hints: "warning",
    maxAssetSize: 2000000,
    maxEntrypointSize: 4000000
  },
  optimization: {
    runtimeChunk: "single"
  }
}
