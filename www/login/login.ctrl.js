'use strict';


angular.module('starter').controller('LoginCtrl', ['$scope', 'jsonRpc', '$state', function ($scope, jsonRpc, $state) {

	$scope.login = {
		'db': 'odooprod2',
		'username':'admin',
		'server': 'http://localhost:9069'
	};
	$scope.submit = function () {
		console.log('send', $scope.login);
		jsonRpc.odoo_server = $scope.login.server;
		jsonRpc.login($scope.login.db, $scope.login.username, $scope.login.password).then(function (a) {
			$state.go('productSearch');
		}, function(e) {
			$scope.errorMessage = e.message;
		});
	}
}]);