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

    res.send('Hello World!');

    const user = {
        name: 'Sandeep Kumar',
        age: 30,
        college: 'nitkkr'
    }
    console.log(user.name);
    user.age=25;
    console.log(user['age']);
});

server.listen(3000, function() {
    console.log('Server has started...');
});