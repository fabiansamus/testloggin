var bcrypt   = require('bcrypt-nodejs');
var mysql = require('./config/database');

// query para buscar el password basado en email
// mysql = "SELECT password FROM USER WHERE email = "+req.body.password+";";

function queryadd(params) {
    mysql.query(params,function(err, rows, fields){
        if (err) {
            console.log("An error ocurred performing the query."+ err);
            return;
        }console.log("Query succesfully executed: ");
    });
    mysql.end(function(){
        // The connection has been closed
    });
}

useradd =  function (params) {
    $query = "INSERT INTO users()VALUES("+params+"); ";
    return queryadd($query);

}
userlog = function(email,pass){
    $query = "SELECT user_pass FROM users WHERE email = '"+email+"';";
    return queryadd($query);
}
// create the model for users and expose it to our app
encrypt = function(password) {
    // create a 8 bit string of charater and add to teh password before make the hash
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
validPassword = function(password) {
    // pass without hash and databse password already hash return true or false
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = bcrypt;