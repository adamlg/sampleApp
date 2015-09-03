var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	addRoutes = require('./routes');

//config
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(8000, function() {console.log('Running on port 8000.')});

// setInterval(function(){console.log('still going.')},1500)
console.log(__dirname)

//routes
addRoutes(app);

//views, sort of
app.use(express.static('./client'));
app.use(express.static('./bower_components'));

// misc. thoughts:
// 	have api endpoints for regular swipe functionality and receiving/storing preferences.
// other possibilities:
// 	endpoint to return/render previous answers - need actual database with users and ratings.
// 	endpoint to buy stuff - would probably just use stripe on the client side, anyway.