const express = require('express')
const routes = require('./routes')
const db = require('./db')

const app = express()
routes(app)

app.use(
  cors({
    origin: [
      'https://sonar-workshop.netlify.app/',
      new RegExp(`.https://sonar-workshop.netlify.app/`, "i"),
    ],
    allowedHeaders: [
      "Authorization",
      "Content-Length",
      "Content-Type",
      "Origin",
    ],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

const port = process.env.PORT || 8040


const server = app.listen(port, async err => {
  if (err) console.error(err)
  else console.log(`Server up on ${port}`)
})

process.on('SIGINT', () => {
    db.close();
    server.close();
    console.log('closed db and server')
});

module.exports = app
module.exports.server = server