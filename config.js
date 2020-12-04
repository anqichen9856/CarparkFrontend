var carpark = angular.module('carpark', ['ngRoute']);
carpark.config(function($routeProvider) {
	$routeProvider
		.when('/registration', {
			templateUrl: 'views/registration.html',
			controller: 'registrationCtrl'
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'loginCtrl'
    	})
    	.when('/carpark', {
			templateUrl: 'views/carpark.html',
			controller: 'carparkCtrl'
		})
		.otherwise({
			redirectTo: '/registration'
		});
});
//for passing login details including jwt token to carpark availability page
carpark.service("loginService", function () {
    this.loginDetails = {};
});