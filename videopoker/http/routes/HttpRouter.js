var express = require('express');
var router = express.Router();
var router_config = require('./RouterConfig');
router.use(function (req, res, next) {
    let event = req.body || {};
    var ip = req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress || '';
    if (ip.split(',').length > 0) {
        ip = ip.split(',')[0]
    }
    event['sourceIP'] = ip;
    event['stage'] = process.env.stage ? process.env.stage : 'dev';
    let resx = function (status, str) {
        return res.send(str)
    }

    var url = req.url;
    if (url.indexOf('?') != -1) url = url.substring(0, url.indexOf('?'));

    router_config[url](event, {}, resx);
});

module.exports = router;