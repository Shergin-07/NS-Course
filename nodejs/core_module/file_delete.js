var fs = require('fs');

fs.unlink('hello.html',function(err,file){
    if(err) throw err;
    console.log("file deleted success fully");


});

