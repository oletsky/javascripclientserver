let http = require('http');
let express = require('express');

let expressexplorer=express();
expressexplorer.listen(8888);
console.log('Server is running on port 8888');


expressexplorer.use(express.static(__dirname));

expressexplorer.get('/', function(req, res){
    console.log("root")
    res.send("Root");
    });

expressexplorer.get('/:common', function(req, res){
    console.log("common")
    res.send("Common");
});

expressexplorer.get('/spec', function(req, res){
    console.log("spec")
    res.send("Spec");
});

