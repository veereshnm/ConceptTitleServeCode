	var ctcApp = angular.module('ctcApp', ['ngRoute']);

	ctcApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        //$locationProvider.hashPrefix('!');
		$routeProvider
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
            });
            
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
              });
	}]);

	// create the controller and inject Angular's $scope
	ctcApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	ctcApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	ctcApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});