var socket = io();


/*
* Client Side Events
*
* Emiting events 
* socket.emit('event', data);
*
* Handling events
* socket.on('event2', function(data){
* 	//you code here
* });
*
*/

socket.emit('event', 'plop');

socket.on('event2', function(data){
	console.log(data);
});