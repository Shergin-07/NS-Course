var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var filepath = "Shergin.html" + q.pathname;

fs.readFile(filepath,function(err,data){
    if (err) {
        res.writeHead(404, {'content-type':'text/html'});
        return res.end("404 File Not Found");
    }

    res.writeHead(200);
    res.write(data);
    res.end();
});    
}).listen(8080);