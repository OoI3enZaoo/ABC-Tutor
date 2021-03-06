const { Nuxt, Builder } = require('nuxt')

const https = require('https')
const fs = require('fs')
const isProd = (process.env.NODE_ENV === 'production')
const port = process.env.PORT || 4500

// We instantiate nuxt.js with the options
const config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)

// Render every route with Nuxt.js

// Build only in dev mode with hot-reloading
if (config.dev) {
  new Builder(nuxt).build()
    .then(listen)
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}
else {
  listen()
}

function listen() {

  const options = {
    key: fs.readFileSync('./ssl/server.key'),
    cert: fs.readFileSync('./ssl/server.crt'),
    passphrase: 'ben12123'
  };

  https.createServer(options, nuxt.render).listen(port)
  console.log('Server listening on `localhost:' + port + '`.')

  // var http = require('http');
  // http.createServer(function (req, res) {
  //     res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  //     res.end();
  // }).listen(port);

}
