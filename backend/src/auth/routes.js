Users = require('./users');

module.exports.login = function(req, res){
    if(!req.body.hasOwnProperty('user') || typeof req.body.user !== 'string'){
        res.status(400);
        res.send();
    }else{
        if(Users.newUser(req.body.user, req.sessionID)){
            res.send();
        }else{
            res.status(400);
            res.send('Username is in use :(');
        };
    }
}

module.exports.logout = function(req, res){
    Users.deleteUser(req.sessionID);
    res.send('well done!');
}