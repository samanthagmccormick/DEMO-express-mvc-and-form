var express = require('express');
// AUTO: Require the body parser module
var bodyParser = require('body-parser');

// Require controller object - this currently has one method 'index'
var indexController = require('./controllers/index.js');

// Require your new APi controller object
var apiController = require('./controllers/api.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
// AUTO: Inject the body parsing functionality into the express middleware chair
app.use(bodyParser.urlencoded({extended: false}));

// You use the indexController here, and its index method, to render the index page! 
app.get('/', indexController.index);
	/* 
	The above does the SAME THING as this:
		app.get('/', function(req, res) {
			res.render('index');
		});
	 */

// Routing for the about page
app.get('/about', indexController.about);

// Routing for the form (API which allows us to add new desserts to the list)
app.post('/dessertSubmit', apiController.addDessert);

var server = app.listen(7109, function() {
	console.log('Express server listening on port ' + server.address().port);
});
