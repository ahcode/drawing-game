var errorList = require('./errorList.json');

module.exports = function(req, res, next){
    res.throwError = function(errorCode){
        var error = errorList[errorCode] || errorList['-'];
        res.status(error.status);
        res.send({status: error.status, error: errorCode, msg: error.msg});
    }
    next();
}