const nodemon = require('nodemon')

console.log(process.env.NODE_ENV)

nodemon({
  execMap: {
    js: "node -r @babel/register"
  },
  script: "server/index.js",
  ignore: [],
  watch: process.env.NODE_ENV === 'development' ? ['server/*'] : false,
  ext: 'js'
})
.on('restart', function() {
  console.log('[NODEMON] Server restarted!');
})
