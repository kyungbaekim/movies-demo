//import angular module
var	myAppModule = angular.module('myApp', ['ngRoute','angularMoment','angularUtils.directives.dirPagination']);
myAppModule.config(function ($routeProvider) {
	$routeProvider
	.when('/login',{
		templateUrl: 'partials/login.html'
	})
	.when('/dashboard',{
		templateUrl: 'partials/dashboard.html'
	})
	.when('/movie/:moviename',{
		templateUrl: '/partials/movie.html'
	})
	.when('/theater/:name', {
		templateUrl: 'partials/theater.html'
	})
	.when('/topics/:id',{
		templateUrl: 'partials/topics.html'
	})
	//access :id from $routeParams.id from usersController
	.when('/users/:id',{
		templateUrl: 'partials/users.html'
	})
	.otherwise({
		redirectTo: '/dashboard'
	});
});









