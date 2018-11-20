Users = require('./users');

module.exports.login = function(req, res){
    if(!req.body.hasOwnProperty('user') || typeof req.body.user !== 'string'){
        res.throwError("E01.03");
    }else{
        if(Users.newUser(req.body.user, req.sessionID)){
            res.send();
        }else{
            res.throwError("E01.02");
        };
    }
}

module.exports.logout = function(req, res){
    Users.deleteUser(req.sessionID);
    res.send();
}

module.exports.isauthenticated = function(req, res){
    var name = Users.getUsername(req.sessionID);
    if (name){
        res.send();
    }else{
        res.throwError("E01.05");
    }
}