let http = require('http');
let express = require('express');
let fs = require('fs');

let expressexplorer=express();
expressexplorer.listen(8888);
console.log('Server is running on port 8888');


expressexplorer.use(express.static(__dirname));

expressexplorer.get('/', function(req, res){
    console.log("root");
    res.sendFile(__dirname+"/root.html");
        
    });

expressexplorer.get('/:common', function(req, res){
    console.log("common");
    res.sendFile(__dirname+"/common.html");
});

expressexplorer.get('/spec', function(req, res){
    console.log("spec");
    res.sendFile(__dirname+"/spec.html");
});

