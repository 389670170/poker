const express = require('express');
const expressWs = require('express-ws');
let wss = expressWs.getWss('/server');
const router = express.Router();
expressWs(router);

router.ws('/send', function (ws, req){
        ws.on('message', function (msg) {
            // 业务代码
        })
    });
module.exports = router;