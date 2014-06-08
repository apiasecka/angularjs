'use strict';

/* App Module */

var myApp = {};

myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.controllers',
  'btford.socket-io'
]).
config(function ($routeProvider, $locationProvider) {
//myApp.config(['$routeProvider',
  //function($routeProvider) {
    $routeProvider.
      when('/currency', {
        templateUrl: 'partials/current.html',
        controller: 'WitajCtrl'
      }).
	  when('/socket', {
        templateUrl: 'partials/socket.html',
        controller: 'Socket'
      }).
      otherwise({
        redirectTo: '/currency'
      });
  //}
//]);
});