angular.module('app',['ngRoute','app.main'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl:'/main/main.html',
			controller:'mainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
}])