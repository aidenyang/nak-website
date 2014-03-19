'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ngRoute',
	'myApp.controllers'
	]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/welcome', {templateUrl: 'views/welcome.html', controller: 'HomeCtrl'});
	$routeProvider.when('/about', {templateUrl: 'views/about.html', controller: 'AboutCtrl'});
	$routeProvider.when('/members', {templateUrl: 'views/members.html', controller: 'MembersCtrl'});
	$routeProvider.when('/contact', {templateUrl: 'views/contact.html', controller: 'ContactCtrl'});
	$routeProvider.when('/media', {templateUrl: 'views/media.html', controller: 'MediaCtrl'});
	$routeProvider.otherwise({redirectTo: '/welcome'});
}]);