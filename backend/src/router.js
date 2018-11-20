var router = require('express').Router();
var Users = require('./auth/users'); // <-- Only for Test View

var authRoutes = require('./auth/routes');

router.get('/api/isauthenticated', authRoutes.isauthenticated);
router.post('/api/login', authRoutes.login);
router.get('/api/logout', authRoutes.logout);

module.exports = router;