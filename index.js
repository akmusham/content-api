const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const path  = require('path')
const fs = require("fs")
require('./Globals')
const mongoose = require('mongoose')
const app = express();
const server = http.createServer(app);
const Routes = require('./Routes')
app.use(cors({
  credentials: true
}));

// app.use((req, res, next) => {
//   res.set({
//     "X-Frame-Options": "sameorigin",
//     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
//     "Cache-Control": "max-age=10,max-stale=10,min-fresh=10,no-cache,no-store,no-transform,only-if-cached ",
//     "strict-transport-security": "max-age=31536000,includeSubDomains,preload",
//     "X-XSS-Protection": "1; mode=block",
//     "x-content-type-options": "nosniff",
//       "Referrer-Policy": "no-referrer",
//         "Content-Security-Policy": "policy"
//   })
//   next()
// })
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use('/content/api/v1', Routes)
app.use(express.static(path.join(__dirname, "/uploads")));
require(`./Schemas`)(db, mongoose);
server.listen(process.env.PORT || 9873, () => {

  connectedEmitter.on('connectedDbs', () => {
    console.log('server listening on Port 9873')
    setTimeout(function() {
      server.emit('listening')
    }, 1000)
  })
})
server.on('error', (err) => {
  console.error('whoops! there was an error');
});

module.exports = server
