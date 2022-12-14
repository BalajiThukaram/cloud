var http= require ('http');
var dm= require('./1')
http.createServer(function(req,res){
 res.writeHead(200,{'Content-Type':'text/plain'});
 res.end('The time and date as of now is '+dm.myDateTime());
}).listen(8080); 