var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
// app.use("/styles", express.static(__dirname));
// app.use("/images", express.static(__dirname + '/images'));
// app.use("/scripts", express.static(__dirname + '/scripts'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/.well-known/apple-app-site-association', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname + '/.well-known/apple-app-site-association'));
});

app.listen(process.env.PORT || 7777);