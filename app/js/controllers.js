'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('WitajCtrl', function ($scope,$http) {
	var updateCurrency = function() {
		$http.get('current.json' + '?id=' + new Date().getTime()).then(function(res){
			$scope.currency = res.data;                
		});
	};
	
	var timer = setInterval(function() {
		$scope.$apply(updateCurrency);
	}, 10000);
	updateCurrency();

}).

controller('Socket', function ($scope, socket) {
	socket.on('send:time', function (data) {
      $scope.time = data.time;
    });
});
