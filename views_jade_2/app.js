var express = require("express");
var app = express();

app.set("view engine", "jade");

app.get("/", function (req, res) {
  res.render("index", {info: "Hello World!"})
});

app.get("/another_example", function (req, res) {
  res.render("another_example", {info: 5})
});



app.listen(3000);
