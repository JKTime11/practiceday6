const express=require('express');
const server=express();

server.get('/', function(req, res) {
    console.log(req.method);
    console.log(req.query);
    console.log(req.query.query1);
    // headers
    console.log(req.headers);
    console.log(req.headers.host);
    console.log(req.headers['accept-encoding']);
    res.send('Hello World');
});

server.listen(3000, function() {
    console.log('Server has started...');
});