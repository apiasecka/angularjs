'use strict';

/* App Module */

var myApp = {};

myApp = angular.module('myApp', [
  'ngRoute',
  'btford.socket-io'
]).
config(function ($routeProvider, $locationProvider) {
    $routeProvider.
		when('/currency', {
			templateUrl: 'partials/current.html',
			controller: 'WitajCtrl'
		}).
		otherwise({
			redirectTo: '/currency'
		});
});