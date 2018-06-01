const express = require('express')
const app = express()

const bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => { 
  res.render('index')
})

app.post('/login', urlencodedParser, (req, res) => {
  var username = req.body.username,
   password = req.body.password
  res.send(`${username} ${password}`)
})

app.get('/hello', (req, res) => res.send('hello'))

app.get('/test', (req, res) => res.send('test'))

app.get('/remove', (req, res) => res.send('remove end point'))

app.listen(4000, () => console.log('Run running on port 3000!'))
