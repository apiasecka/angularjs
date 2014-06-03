'use strict';

/* Controllers */


myApp.controller('WitajCtrl', function ($scope,$http) {
	var updateCurrency = function() {
		$http.get('current.json').then(function(res){
			$scope.currency = res.data;                
		});
	};
	
	var timer = setInterval(function() {
		$scope.$apply(updateCurrency);
	}, 10000);
	updateCurrency();

});

myApp.controller('LudzieCtrl', ['$scope','zmienna',function ($scope,zmienna) {
	$scope.liczba = zmienna.wartosc;
	console.log("byla liczba: " + $scope.liczba);
    $scope.$watch('liczba', function(newValue, oldValue) {
		console.log("Zmiana " + oldValue + " na " + newValue);
		zmienna.wartosc = newValue;
	});	
	
}]);


myApp.controller('ProtosiCtrl', function ($scope,$http) {
	$scope.pobrana = "czekam";
	$http.get('populacja').success(function(data) {
	  console.log(data);
	  $scope.pobrana = data.wartosc;
	});
});

myApp.controller('ZergiCtrl', function ($scope) {
});
