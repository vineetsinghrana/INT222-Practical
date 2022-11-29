var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello world!");
  //   res.end("BYE!!!");
});

app.listen(3000);
