// require express
var express = require('express');
// create a new express app
var app = express();

// spin up the server
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('server listening on port');
});

// base url
app.get('/', function( req, res ){
  console.log( 'hello world from base url get' );
  res.writeHead(200);
  res.write('Hello world!');
  // will hang on load if not ended
  res.end();
});
