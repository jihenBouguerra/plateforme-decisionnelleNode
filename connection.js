module.exports = {
    var config = {  
                        userName: 'adminWebApp',  
                        password: 'admin',  
                        server: 'localhost', 
                        database: 'webApplicationDB' }; 
ToConnect: function() {
    var Connection = require('tedious').Connection;  
           
                        
            var connection = new Connection(config);  
            connection.on('connect', function(err) {  
                        
            if (err){console.log("erreur");}
            else {console.log("Connected weyyyyy!!!!");}});
}}

 