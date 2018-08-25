const express = require('express')
const app = express()
var shit;

fs = require('fs')
fs.readFile('stats.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  shit = data
});

app.get('/', (req, res) => res.send(shit))


app.listen(3000, () => console.log('Example app listening on port 3000!'))