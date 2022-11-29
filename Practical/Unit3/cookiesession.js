var express = require('express')
var app = express()
var cookieSession = require('cookie-session')

// app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  //secret: 'key' //either use keys or use secret
   maxAge:5000
}))
// This allows you to set req.session.maxAge to let certain sessions
// have a different value than the default.
// app.use(function (req, res, next) {
//   req.sessionOptions.maxAge = 50000
//   next()
// })
app.get('/', function (req, res, next) {
  if(req.session.views){
    req.session.views++;
    res.send("No. of visits "+ req.session.views);
 } else {
    req.session.views = 1;
    res.send("No. of visits "+ req.session.views);
 }
  })
  
  app.listen(2000)
