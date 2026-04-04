var fs = require('fs');

fs.open('forever.html','w',function(err,file){
    if(err) throw err;
    console.log("file created success fully");


});

