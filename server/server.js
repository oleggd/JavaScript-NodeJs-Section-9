const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connect');

    socket.emit('newMessage', {
        from: 'oleg',
        text: 'Hi, my message',
        createAt : 123
    });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
        socket.emit('newMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createAt : newMessage.createAt
        });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected from server');
    });
});
//----------------------------------------------------------
server.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
