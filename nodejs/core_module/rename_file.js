var fs = require("fs");

fs.rename("./forever.html","./Shergin.html",function(err){

    if(err) throw err;
    console.log("file Renamed successfully");
})