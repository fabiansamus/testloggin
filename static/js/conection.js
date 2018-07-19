// Get the mysql service
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
        console.log(err.code);
        console.log(err.fatal);
    }
});

// Perform a query

function user(data) {
  console.log(data);
  $query = "INSERT INTO estudios_universitarios"+
  "(`id_persona`, `institution`, `level`, `year_start`, `year_term`, `title`) "+
  "VALUES ('value-1','value-2','value-3','value-4','value-5','value-6')";
  connection.query($query, function(err, rows, fields) {
      if(err){
          console.log("An error ocurred performing the query.");
          return;
      }

      console.log("Query succesfully executed: ", rows);
  });
}

// Close the connection
connection.end(function(){
    // The connection has been closed
});
