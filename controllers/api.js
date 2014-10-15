//- Load in the model because the form will add to it!
var desserts = require('../models/desserts.js');

var apiController = {
	addDessert: function(req, res) {
		// pull out the submitted form data!
		// this is where bodyParser gets used!
		var data = req.body;
		desserts.push(data);
		// Send the user back to the homepage to show them their newly added dessert
		res.redirect('/');
	}
};

module.exports = apiController;