var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Home');
})
app.get('/hello.txt', function(req, res) {
    res.send('Hello World');
});

app.post('/callback', function(req, res) {
  console.log('recieved post request');
  console.log(req.body);
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
