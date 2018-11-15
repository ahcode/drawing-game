var session = require('express-session');
var uuid = require('uuid');

module.exports.middeware = session({
    genid: (req) => {
      return uuid() // use random UUIDs for session IDs
    },
    secret: 'PIM PAM TRUCU TRUCU', //will be changed for an env variable
    resave: false,
    saveUninitialized: true
});