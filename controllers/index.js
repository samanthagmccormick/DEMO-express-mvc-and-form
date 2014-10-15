// .. = go up twice because you're in the controller file
var desserts = require('../models/desserts.js');

//- Object called indexController, which has a method of index on it
var indexController = {
	index: function(req, res) {
		// Pass a reference to Jade that will tell it what desserts means!
		res.render('index', {
			desserts: desserts
		});
	},

	about: function(req, res) {
		res.render('about', {
			desserts: desserts,
			dessertCount: desserts.length
		});
	}
};

//- You're exporting indexController for use
module.exports = indexController;