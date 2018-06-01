const express = require('express')
const app = express()
// added comments
app.get('/', (req, res) => res.send('hello world'))
app.get('/hello', (req, res) => res.send('hello'))


app.listen(4000, () => console.log('Run running on port 3000!'))
