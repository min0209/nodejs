//app.js
var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.send("hello,world");
});

app.listen(3000, function(){
    console.log('running on 3000 port')
});