var fs = require("fs");

fs.appendFile("forever.html","<h1>Shergin</h1>",function(err,file){
   if(err) throw err;
   console.log("file writed successfully")
})