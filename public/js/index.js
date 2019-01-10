var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
    socket.emit('createMessage', {
        from: 'nata',
        text: 'Hi nata. This is Oleg'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(newMessage) {
    console.log('New message : ', newMessage);
});