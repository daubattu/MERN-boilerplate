
const webpack = require("webpack") 
const merge = require('webpack-merge');
const path = require("path")

const commonConfig = require('./common.config')

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['webpack-hot-middleware/client?reload=true', path.resolve(__dirname, "../client/index.jsx")]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
})