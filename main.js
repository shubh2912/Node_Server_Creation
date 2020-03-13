var http = require("http");
var url = require("url");
var queryString = require("querystring");

const hostname = 'localhost';
const port = 8081;

const server = http.createServer((req, res) => {
    var pathName = url.parse(req.url).pathname;
    var queryParams = queryString.parse(url.parse(req.url).query);
    if (pathName == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head >')
        res.write('<title>Node Server</title>')
        res.write('</head >')
        res.write('<body>')
        res.write('<h1>Hello from Node Server...</h1>')
        res.write('</body>')
        res.write('</html >')
    }
    else if (pathName == '/user') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head >')
        res.write('<title>Node Server</title>')
        res.write('</head >')
        res.write('<body>')
        res.write('<h1>Hello</h1>')
        res.write('</body>')
        res.write('</html >')
    }
    else if (pathName == '/object') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.write('{name: Shubham}')
    }
    else if (pathName == '/text') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Hello from ' + queryParams['FN'] + '' + queryParams['LN']);
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
