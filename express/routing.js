var express=require('express');
var app=express();

app.get('/hello',function(req,res){
    res.send("Hi");
});

app.listen(8080);
