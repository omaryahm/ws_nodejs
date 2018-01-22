var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World with Express !");
});

app.listen(3000);
