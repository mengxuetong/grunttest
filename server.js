/**
 * Created by mengxt on 2015/3/12.
 */
var express = require('express');
var app = express();
var PORT = 8080;
var util = require('util');
var bodyParser = require('body-parser');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));
app.post('/reg',function(req,res){
    console.log(util.inspect(req.body));
    res.end('reg success');
});
app.post('/throw',function(req,res){
    console.log(util.inspect(req.body));
    res.end('throw success');
});
app.post('/pick',function(req,res){
    console.log(util.inspect(req.body));
    res.end('pick success');
});
app.listen(PORT);
console.log('start on'+PORT);