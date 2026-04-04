var http = require('http');

// Create Server object:

http.createServer(function(req, res){
    res.write("<h1> Hello </h1>");
    res.end(); // end the response  
}).listen(5000); // The server object listen a port 8080