var express = require('express');
var app = express();
var url = require('url');

app.get('/',function(req,res){
    var _url = req.url;
    var queryData = url.parse(_url, true).query;

    res.send("id : " + queryData.id +" password : "+ queryData.password);
});

app.listen(3000, function(){
    console.log('running on 3000 port')
});