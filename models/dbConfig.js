const mongoose = require('mongoose');

mongoose.connect(
  "mongodb://cluster0.qn1dg.mongodb.net/node-api",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connected");
    else console.log("Connection error : " + err);
  }
)
