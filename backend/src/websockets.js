module.exports = function(socket){
    console.log('A user connected');
    socket.on('disconnect', function () {
        console.log('A user disconnected');
    });
};