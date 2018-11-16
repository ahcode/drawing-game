var router = require('express').Router();
var Users = require('./auth/users'); // <-- Only for Test View

var authRoutes = require('./auth/routes');

//Test View
router.get('/usercheck', (req, res) => {
    var name = Users.getUsername(req.sessionID);
    if (name){
        res.send('Hola ' + name + '!');
    }else{
        res.send('Hola Mundo!');
    }
});

router.post('/login', authRoutes.login);
router.get('/logout', authRoutes.logout);

module.exports = router;