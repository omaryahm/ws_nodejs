
var http = require("http");

var driver = function(request, response) {
    console.log("Hola mundo");
    response.end("Hello World, another info!");
};

var servidor = http.createServer(driver);
servidor.listen(8080);