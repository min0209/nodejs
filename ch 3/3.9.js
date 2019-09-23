const http = require('http');

http.createServer( (req, res) => {
    let { url, headers, method } = req

    if(method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        if(url === '/users'){
            res.end('<h2>/users 접속');
        }else if(url === '/boards'){
            res.end('/boards 접속');
        }else if(url === '/clothes'){
            res.end('/clothes 접속');
        }
    }

    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Not Found Page!');

}).listen(3000, () => {
    console.log('server on : 3000port')
});
