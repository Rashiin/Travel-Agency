'use strict';
const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    res.write('Hello from other side');
    res.end();
});

server.listen(port, function(error) {
    if (error) {
        console.log("you have error ! ",error);
    } else {
        console.log("server is on port" + port);
    }
})