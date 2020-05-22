require('../index');
var WebSocket = require('ws')
var socket = new WebSocket('ws://localhost:3000/server');
socket.addEventListener('open', function (event) {
    // let data = commons.ProbufWrapper.encodeWrapper({
    //     emailId:31121,
    //     facebookid:'mm',
    //     loginData: {
    //         udid: '1',
    //         channel: '2',
    //         baseVersion: 4545454,
    //         resVersion: '4'
    //     }
    // },'RequestLogin');
    let data = commons.ProbufWrapper.encodeWrapper({
        userData: {
            name: "test",
            level: 33,
            curExp: 2023232212133,
            nextExp: 232,
            monentsCoin: 565,
            cash: 233.8,
            vipExp: 224,
            vipNextExp: 232,
            iconId: 6,
            userId: 11
        },versionData:{
            needUpdate:false,
            updateMsg:'hello',
            updateCash:444.9,
            hotVersion:22,
            bundleVersion:78
        }
    },'RequestLoginResult');
    socket.send(JSON.stringify({requestType:'RequestLoginResult',data:data}));
    console.log('socket is open')
});

socket.addEventListener('message', function (event) {
    console.log(event)
});
