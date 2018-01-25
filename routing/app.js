var express = require("express");
var app = express();
app.set("view engine", "jade");

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/", function(req, res) { 
    res.render("answer");
});

// example: http://localhost:3000/Omar
app.get("/:name", function (req, res) {
    console.log(req.params.name);
    res.render("answer", {name: req.params.name});
});

app.listen(3000);