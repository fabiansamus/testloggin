var bcrypt   = require('bcrypt-nodejs');
var mysql = require('./config/database');

// query para buscar el password basado en email
// mysql = "SELECT password FROM USER WHERE email = "+req.body.password+";";
user = function(email){
    $query = "SELECT user_pass FROM users WHERE email = '"+email+"';";
    mysql.query($query, function(err, rows, fields){
        return rows[0].use_pass;
    }
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