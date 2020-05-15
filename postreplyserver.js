let http = require('http');
let express = require('express');
const bodyParser = require("body-parser");

let server=express();
server.listen(8888);
console.log('Server is running on port 8888');


server.use(express.static(__dirname));
let parser = bodyParser.urlencoded({extended: false});

server.get('/', function(req, res){
    res.sendFile(__dirname+"/simpleform.html")
});

server.post('/reply', parser, function(req, res){
    res.send("Привіт, "+req.body.inp);
    res.end();
});