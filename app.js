// require related modules in this project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const velidation = require('./velidation.js')
const app = express()
const port = 3000

// set template engineer
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set router
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const result = velidation(email, password)
  result ? res.render('welcome', { result }) : res.render('index', { alert: true })
})

// listening port
app.listen(port, () => {
  console.log(`Express server is listening on http://local:${port}`)
})