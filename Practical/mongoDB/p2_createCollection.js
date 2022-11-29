var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017";

var url = "mongodb+srv://db1:sAv6LRpfQ13nuZUE@int222.top8sxo.mongodb.net/test";

//var url = "mongodb+srv://mohan:lpuint222@lpu.ski9rio.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  dbo.createCollection("student_details", function (err, res) {
    if (err) throw err;
    console.log("Collection created");
    db.close();
  });
});
