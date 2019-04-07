const ENV = require("dotenv")

ENV.config()

module.exports = {
  PORT: process.env.PORT || 3000
}