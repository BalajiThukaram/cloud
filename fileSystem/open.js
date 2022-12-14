var http = require('http');
var fs = require('fs');
console.log('trying to open');
http.createServer(function(req,res){
    fs.open('append.txt','r',function(err,file){
        if(err) throw err;
        console.log('opened');
    });
}).listen(8080); 