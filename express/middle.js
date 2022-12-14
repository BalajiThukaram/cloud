var express= require('express');
var app= express();

app.use(function(req,res,next){
    console.log("A new req recived "+Date.now());
    next();
});
app.get('/',function(req,res){
    res.send('This is a demo');
});
app.get('/things',function(req,res){
    res.send("Things");
});
app.listen(8080);