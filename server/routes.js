module.exports.routes = function(app, root) {  
  


	/*
	* Route
	*
	* app.get('/uri', function(req, res){
	*   res.render( root + 'view.ejs');
	* });

	*/

	app.get('/', function(req, res){
	  res.render( root + 'index.ejs');
	});



}