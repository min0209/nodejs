const express = require('express');
const app = express();
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);


app.get('/',function(req,res){
    res.render("index.html");
});

app.listen(3000, function(){
    console.log('running on 3000 port')
});