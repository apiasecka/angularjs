'use strict';

/* App Module */

var myApp = {};

myApp = angular.module('myApp', [
  'ngRoute'
]);

myApp.factory('myApp', function() {
	return {wartosc:"poczatkowa"};
});


myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/currency', {
        templateUrl: 'partials/current.html',
        controller: 'WitajCtrl'
      }).
      otherwise({
        redirectTo: '/currency'
      });
  }
]);