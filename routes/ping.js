var config = require('./../app-config')
var router = require('express').Router()

router.get('/', function(req, res, next) {
    res.jsonOk({
        pong: config.server.pong
    })
});

module.exports = router;
