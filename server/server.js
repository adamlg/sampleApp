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

//views
app.use(express.static('./client'));
app.use(express.static('./bower_components'));



// misc. thoughts:
// 	main endpoint for regular swipe functionality
// 	endpoint for receiving and storing preference
// 	endpoint to return/render previous answers
// 	endpoint to buy stuff