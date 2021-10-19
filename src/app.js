const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(
    (req, res) => {

    let {url} = req;

    console.log (req.url);    

    if(url == "/posts"){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('Liste des articles');     
    }else if (url == "/users"){

        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('Liste des utilisateurs');
        }
    }
);

server.listen(port, hostname);