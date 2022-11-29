// var http=require('http');

// var server=http.createServer(function(req,res){
//     res.end('test');
// });

// server.on('listening',function(){
//     console.log('ok, server is running');
// });

// server.listen(80);

var express = require('express');
var app = express();

var myLogger = function(req, res, next) {
    console.log("LOGGED1");
    next();
}

var myLogger2 = function(req, res, next) {
    console.log("LOGGED2");
    //next();
}

app.use(myLogger);
app.use(myLogger2);

app.get('/', function(req, res) {
    res.send('Hello World!');
})


app.listen(3000);