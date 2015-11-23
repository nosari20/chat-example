/*
* Express
*/
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/client/public'));

/*
* Socket.io
*/
var http = require('http').Server(app);
var io = require('socket.io')(http);


/*
* Events 
*/
io.on('connection', function(socket){
	require('./server/events.js').sockets(io,socket)
});



/*
* Routes
*/
require('./server/routes.js').routes(app, __dirname+'/client/views/');




/*
* Start listening
*/
http.listen(3000, function(){
  console.log('listening on *:3000');
});