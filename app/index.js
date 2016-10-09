'use strict';

var app = angular.module('todoListApp', ['ngRoute', 'ngResource']).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/views/index.html'
	});
}]);
