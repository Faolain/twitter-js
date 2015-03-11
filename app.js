var express = require( 'express' );
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

app.get('/', function(req,res){
  res.send('hello world');
});

app.get('/news', function(req,res){
  res.send('HERE ARE YOUR NEWS');
});