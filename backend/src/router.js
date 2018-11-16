var router = require('express').Router();
var Users = require('./auth/users'); // <-- Only for Test View

var authRoutes = require('./auth/routes');
//var gameRoutes = require('./game/routes');

//Test View
router.get('/usercheck', (req, res) => {
    var name = Users.getUsername(req.sessionID);
    if (name){
        res.send('Hola ' + name + '!');
    }else{
        res.send('Hola Mundo!');
    }
});

router.get('/', (req, res) => res.sendFile('index.html', {'root': './public'}));
router.post('/login', authRoutes.login);
router.get('/logout', authRoutes.logout);
//router.get('/game', gameRoutes.game);

module.exports = router;