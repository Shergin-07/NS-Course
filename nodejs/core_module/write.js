var fs = require("fs");

fs.writeFile("./forever.html","<h1>hello Shergin</h1>",function(err){
    if (err) throw err;
    console.log("File writed successfully");

});


// var fs = require("fs");

// fs.writeFile("./forever.html", "<h1>Hello </h1>", function(err) {
//     if (err) throw err;
//     console.log("File written successfully");
// });