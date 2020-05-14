const port = 8100;

const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/assets/'));

app.get('/',(req, res, next)=>{
    res.sendFile(__dirname + '/assets/views/index.html');
});

server.listen(port);
console.log('Serveur lancé!');