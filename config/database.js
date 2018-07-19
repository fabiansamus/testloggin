// config/database.js
var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
});
// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log('error connection: '+ err.stack);
        
        console.log(err.code);
        console.log(err.fatal);
        return;
    }
    console.log('conected as id ' + connection.threadId);
    
});


module.exports = connection;

