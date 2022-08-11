var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/.well-known/apple-app-site-association', function (req, res) {
  res.header('Content-Type', 'application/json');
  // res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname + '/.well-known/apple-app-site-association'));
});

app.listen(process.env.PORT || 7777);