var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017/student";
var url = "mongodb+srv://db1:sAv6LRpfQ13nuZUE@int222.top8sxo.mongodb.net/test";

// var url = "mongodb://localhost:27017";

// sAv6LRpfQ13nuZUE

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
