var express = require("express");
var app = express();

// In this case public files will be available on '/' example: https://localhost:3000/css/app.css
// app.use(express.static('public'));

// In this case public files will be available on '/my_files/' example: https://localhost:3000/my_files/css/app.css
app.use('/my_files', express.static('public'));

app.listen(3000);