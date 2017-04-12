let http = require ("http");
let fs = require("fs");
//var db = require('./connection');
 //let orm =require("orm");


 
 
const server = http.createServer((req, res) => {
 console.log("serveur created");
});


server.on('request', (request, response) => {

        fs.readFile('index.html','utf-8' ,(err,data) => {
        if (err) {
            response.writeHead(404);
            response.end("ce fichier n'existe pas !!");}
        else{
            response.writeHead(200,{'content-type':'text/html; charset= utf-8'});
            //db.ToConnect();
         }
            response.end(data);
            });

            
 
});
server.listen(4000);
 