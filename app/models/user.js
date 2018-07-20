var bcrypt   = require('bcrypt-nodejs');
var mysql = require('./config/database');

// create the model for users and expose it to our app
encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = bcrypt;