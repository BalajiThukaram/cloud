var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.appendFile('append.txt','working',function(err){
        if (err) throw err;
        console.log('Appened');
    });
}).listen(8080);  