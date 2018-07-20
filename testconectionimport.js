var mysql    = require('./config/database');
var bcrypt   = require('bcrypt-nodejs');



    // var password = bcrypt.hashSync('prueba_de_acceso');
    // console.log(password);
    // var pass = bcrypt.compareSync('prueba_de_acceso','$2a$10$OCxoNR96LiWTARZP1TlSmeEYs/4Dpj8dFB/KuZH6OxEqr0iSY1MoO');
    // console.log(pass);
    
    $query = "SELECT user_pass FROM users WHERE user_email = 'samus226@hotmail.com';";

    // $query = "INSERT INTO users(user_name, user_email, user_pass) VALUES ('samus54', 'samus226@hotmail.com', '"+password+"');";
    mysql.query($query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query."+ err);
            return;
        }
        var pass1 = bcrypt.compareSync('prueba_de_acceso',rows[0].user_pass);
        console.log("Query succesfully executed: ", rows[0].user_pass, pass1);
    });
    mysql.end(function(){
        // The connection has been closed
    });
