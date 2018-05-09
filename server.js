const WebSocket = require('ws');
const btoa = require('btoa');
const idcardInfo = require('./idcard-info');

const wss = new WebSocket.Server({ port: 8088 , path: "/ReadIDCard" });
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    ws.on('close', function close() {
        console.log('disconnected');
    });
    setTimeout(() => {
        var body = {
            Event: 'OnCardInserted',
            Progress: '',
            PhotoImage: '',
            Data: {}
        };
        ws.send(JSON.stringify(body));
    }, 1000);

    setTimeout(() => {
        var body = {
            Event: 'OnCardLoadProgress',
            Progress: '10',
            PhotoImage: '',
            Data: { }
        };
        ws.send(JSON.stringify(body));
    }, 2000);

    setTimeout(() => {
        var body = {
            Event: 'OnCardLoadProgress',
            Progress: '30',
            PhotoImage: '',
            Data: { }
        };
        ws.send(JSON.stringify(body));
    }, 4000);

    setTimeout(() => {
        var body = {
            Event: 'OnCardLoadProgress',
            Progress: '50',
            PhotoImage: '',
            Data: { }
        };
        ws.send(JSON.stringify(body));
    }, 6000);

    setTimeout(() => {
        var body = {
            Event: 'OnCardLoadProgress',
            Progress: '70',
            PhotoImage: '',
            Data: { }
        };
        ws.send(JSON.stringify(body));
    }, 8000);

    setTimeout(() => {
        var body = {
            Event: 'OnCardLoadProgress',
            Progress: '100',
            PhotoImage: '',
            Data: { }
        };
        ws.send(JSON.stringify(body));
    }, 10000);

    setTimeout(() => {
        var body = {
            Event: 'OnCardLoadCompleted',
            Progress: '',
            PhotoImage: idcardInfo.PhotoImage,
            Data: btoa(JSON.stringify(idcardInfo.Data))
        };
        ws.send(JSON.stringify(body));
    }, 12000);
});