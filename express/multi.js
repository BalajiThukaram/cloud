var express=require('express');
var app=express();

app.get('/hi',function(req,res){
    res.send("Hi");
});

app.post('/hi',function(req,res){
    res.send("post method check\n");
});

//curl -X POST "http://localhost:8080/hi"


app.listen(8080);
