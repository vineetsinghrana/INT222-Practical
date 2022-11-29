var express = require("express");
var app = express();

app.get("/test", function (req, res) {
  res.download("Unit3/test.txt", function (err) {
    if (err) {
      res.send("No such file");
    } else {
      console.log("File downloaded successfully");
    }
  });
});

app.get("/test2", function (req, res) {
  res.download("test2.txt", function (err) {
    if (err) {
      res.send("No such file.");
    } else {
      console.log("File downloaded successfully");
    }
  });
});
app.listen(2000);
