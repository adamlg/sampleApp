var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	addRoutes = require('./routes');

//config
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(8000, function() {console.log('Running on port 8000.')});

//routes
addRoutes(app);

//views, sort of
app.use(express.static('./client'));
app.use(express.static('./bower_components'));

// other endpoint possibilities:
// 	endpoint to return/render previously rated pieces - need database with users and ratings.
// 	endpoint to buy stuff - would probably just use stripe on the client side, but need to update database.