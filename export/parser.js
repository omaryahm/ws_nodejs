function parse(req) {
    var params = [], dic_params = {};
    if (req.url.indexOf("?") > 0) {
        var url_data = req.url.split("?");   // /?search=Testing ---> [ '/', 'search=Testing' ]
        var params = url_data[1].split("&"); // [ 'search=Testing' ]
    }
    for (var i = params.length-1; i>=0; i--) {
        var param = params[i]; // search=Testing
        var param_section = param.split("="); //[search,Testing]
        params[param_section[0]] = param_section[1]; // {search: Testing}
    }
    return params;
}

module.exports.parse = parse;
module.exports.example = "Hello world !";