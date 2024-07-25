const http =require('http');
const fs = require('fs');

const myServer = http.createServer((req ,res) => {
    const log = `${Date.now()}: ${req.url} New Req REcecived\n`;
    fs.appendFile('log.txt',log,  (err, data) => {
        switch(req.url) {
            case '/':
                res.end("<h1>You are at  Home Page</h1> ");
                break;
            case '/about':
                res.end("<h1>My name is Hamad Marral</h1> ");
                break;
            default:
                res.end("404 page not found");
                break;
        }
       
     
});
});


myServer.listen(8000, 'localhost', () => console.log("Server is started"));