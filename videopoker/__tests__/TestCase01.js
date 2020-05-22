require('../index');
var WebSocket = require('ws')
var socket = new WebSocket('ws://localhost:3000/server');
socket.addEventListener('open', function (event) {
    let data = commons.ProbufWrapper.encodeWrapper({
        emailid:'xxx',
        facebookid:'mm',
        loginData: {
            udid: '1',
            channel: '2',
            baseVersion: '3',
            resVersion: '4'
        }
    },'RequestLogin');
    socket.send(JSON.stringify({requestType:'RequestLogin',data:data.toString()}));
    console.log('socket is open')
});

socket.addEventListener('message', function (event) {
    console.log(event.data)
});

