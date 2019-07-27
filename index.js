var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('The truth about the world, he said, is that anything is possible.');
})

app.listen(3000, function () {
  console.log('We will take upon ourselves the mystery of things.')
})
