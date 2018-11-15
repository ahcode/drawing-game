var router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hola Mundo!\n');
});

module.exports = router;