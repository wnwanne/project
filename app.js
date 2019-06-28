var url =require('url');
var fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File no found');

        } else {
            response.write(data)
        }
        
        response.end();
    });
}

module.exports = {
    handleRequest: function(request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'})

        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/': 
                renderHTML('./index.html', response);
                break;
            case '/index.html': 
                renderHTML('./index.html', response);
                break;
            case '/about_us.html':
                renderHTML('./about_us.html', response);
                break;
            case '/services.html':
                renderHTML('./services.html', response);
                break;
            case '/contact_us.html':
                renderHTML('./contact_us.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();

        }
    }
};