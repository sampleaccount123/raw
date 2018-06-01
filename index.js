const express = require('express')
const app = express()
// added comments
app.get('/', (req, res) => res.send('hello world'))

app.listen(3000, () => console.log('Run running on port 3000!'))
