const http = require('http');

const server = http.createServer((req,res) => {
    res.end('Response received at port 8080');
});

server.listen(8080,() =>{
    console.log('Server is listening on port 8080')
});