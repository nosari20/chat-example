module.exports.sockets = function(io,socket) {    



	/* Server Side Events
	*
	* Emiting events 
	* io.emit('event', data);
	*
	* Handling events
	* socket.on('event', function(data){
	* 	//you code here
	* });
	*
	*/

	socket.on('event', function(data){
		io.emit('event2', data);
	});




}