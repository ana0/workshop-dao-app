const express = require('express')
const routes = require('./routes')
const db = require('./db')

const app = express()
routes(app)


const server = app.listen(process.env.PORT, async err => {
  if (err) console.error(err)
  else console.log(`Server up on ${process.env.PORT}`)
})

process.on('SIGINT', () => {
    db.close();
    server.close();
    console.log('closed db and server')
});

module.exports = app
module.exports.server = server