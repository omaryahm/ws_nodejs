function render(html, params, vars) {
    for (var i = vars.length - 1; i >= 0; i--) {
        var v = vars[i]; 
        html = html.replace("{"+vars[i]+"}", params[v]);
    }
    return html;
}

module.exports.render_view = render;