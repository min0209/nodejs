var express = require('express');
var app = express();
var url = require('url');

app.get('/',function(req,res){
    var queryData = url.parse(_url, true).query;
    res.send(queryData.id);
});

app.listen(3000, function(){
    console.log('running on 3000 port')
});