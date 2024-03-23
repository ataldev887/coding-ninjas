const http = require('http');

const server = http.create.Server((req,res) => {
    console.log(req.url);
    if(req.url=='/product'){
        return res.end('This is a product page');
    }else if(req.url=='/user'){
        res.end('This is a user page');
    }
    res.end('Welcome to Nodejs server');
});
server.listen(3200,() => {
    console.log('Server is listening on port 3100');
});