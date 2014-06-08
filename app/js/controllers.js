'use strict';

/* Controllers */

myApp.controller('WitajCtrl', function ($scope, $http, socket) {
	var updateCurrency = function() {
		$http.get('current.json' + '?id=' + new Date().getTime()).then(function(res){
			$scope.currency = res.data;                
		});
	};
	
	var timer = setInterval(function() {
		$scope.$apply(updateCurrency);
	}, 10000);
	updateCurrency();
	
	socket.on('change', function(obj) {
		$scope.todos = obj;
		$scope.$apply();
	});
	
	$scope.add = function() {
		$scope.todos.push({text:$scope.todoText, done:false});
		$scope.todoText = '';
		socket.emit('change', $scope.todos);
	};
	
	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	};
	
	$scope.remove = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo) {
			if (!todo.done) $scope.todos.push(todo);
		});
		socket.emit('change', $scope.todos);
	};
	
	$scope.change = function() {
		socket.emit('change', $scope.todos);
	};

});

