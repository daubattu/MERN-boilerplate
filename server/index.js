import express from 'express'
import path from "path"
import webpack from "webpack"
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from "../webpack.config"
import { PORT } from "../configs"

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/build/static')))

if (process.env.NODE_ENV === "production") {
  app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build/index.html'))
    response.end()
  })
} else {
  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath  
  }))

  app.use(webpackHotMiddleware(compiler));
}

app.listen(PORT, "0.0.0.0", error => {
  if(error) console.log(error)
  else console.log(">>> 🌎 Open http://0.0.0.0:%s/ in your browser.", PORT)
})
