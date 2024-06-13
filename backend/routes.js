const bodyParser = require('body-parser')
const cors = require('cors')
const polls = require('./controllers/polls')
const votes = require('./controllers/votes')

module.exports = (app) => {
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.get('/', (req, res) => res.status(200).json('Server listening'))

  app.get('/polls', polls.readPolls)
  app.get('/polls/:top', polls.readPolls)
  app.post('/polls', polls.createPoll)
  app.put('/polls', polls.updatePoll)
  app.delete('/polls', polls.deletePoll)

  app.get('/votes', (req, res) => res.status(200).json('Votes endpoint'))
  app.get('/votes/:id', votes.readVotes)
  app.post('/votes', votes.createVotes)
  app.put('/votes', (req, res) => res.status(200).json('Votes endpoint'))
  app.delete('/votes', (req, res) => res.status(200).json('Votes endpoint'))
}