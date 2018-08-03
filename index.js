var express = require('express');
var app = express();
var http = require('http').Server(app);
var hbs = require('hbs');
var fs = require('fs');
var ttest = require('ttest');
//modules

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use("/images", express.static(__dirname+"/images"));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
})

app.get('/data_contribute', function(req, res){
	res.sendFile(__dirname + '/data_contribute.html')
})

app.get('/graphs', function(req, res){
	res.sendFile(__dirname + '/graphs.html')
})

app.get('/index.json', function(req, res){
	res.sendFile(__dirname + '/index.json')
})

http.listen(3000, function() {
	console.log("listening on port 3000");
})