var http = require("http"),
    fs = require("fs"),
    parser = require("./parser.js"),
    render = require("./render.js");

var parse = parser.parse;
var example = parser.example;
console.log(example);

http.createServer(function(req,res){
    if (req.url.indexOf("favicon.ico") > 0) { return; } // if favicon is requested, call return...
    fs.readFile("./index.html", function(err,html) {
        var html_string = html.toString();
        var vars = html_string.match(/[^\{\}]+(?=\})/g);
        var params = parse(req);

        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(render.render_view(html_string, params, vars));
        res.end();
    });
}).listen(8080);

