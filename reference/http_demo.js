const http = require('http');

// Create server

http.createServer((req, res) => {
    // Write response
    res.write('Hello, world');
    res.end();
}).listen(3333, () => console.log('Server running!!'));