var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	addRoutes = require('./routes');

//config
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(3000, function() {console.log('Running on port 3000.')});

//routes
addRoutes(app);

//views, sort of
app.use(express.static('./client'));
app.use(express.static('./bower_components'));

// misc. thoughts:
// 	main endpoint for regular swipe functionality - done
// 	endpoint for receiving and storing preference - done
// 	endpoint to return/render previous answers - need actual database with users and ratings
// 	endpoint to buy stuff - would probably just use stripe on the client side, anyway.