var mysql = require('./config/database');


    $query = 'SELECT * FROM test;';
    mysql.query($query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query."+ err);
            return;
        }
  
        console.log("Query succesfully executed: ", rows);
    });
    mysql.end(function(){
        // The connection has been closed
    });