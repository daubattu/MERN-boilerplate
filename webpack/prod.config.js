const path = require('path')
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const commonConfig = require('./common.config')

module.exports = merge(commonConfig, {
  mode: "production",
  devtool: 'hidden-source-map',
  entry: {
    app: path.resolve(__dirname, "../client/index.jsx")
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
})

