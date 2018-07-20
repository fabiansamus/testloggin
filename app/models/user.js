var bcrypt   = require('bcrypt-nodejs');
var mysql = require('./config/database');

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