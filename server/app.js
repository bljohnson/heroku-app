// var http=require('http');
// http.createServer(function(req,res){
//   res.writeHead(200);
//   resp.write("Hello world!");
//   res.end();
// }).listen(3000);
//
// console.log('listening on port8080');

// require express
var express = require('express');
// create a new express app
var app = express();
// require path
// var path = require('path');
/// FIRST RUN: npm install body-parser --save
// these are needed for POST
// var bodyParser = require('body-parser');
// // // don't use extended as
// var urlencodedParser = bodyParser.urlencoded({extended:false});

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

// set up "public" folder for static files
// app.use(express.static('public'));
