'use strict';


angular.module('starter').controller('LoginCtrl', ['$scope', 'jsonRpc','$cookies','$state','cartService', function ($scope, jsonRpc,$cookies,$state,cartService) {
	var log_data=cartService.getlogin();
	$scope.login = {
		'db': 'odoo',
		'username':log_data.login,
		'password':log_data.pass,
		'server': 'https://odoo.gestionblancoamor.com'
	};

	$scope.submit = function () {
		console.log('send', $scope.login);
		jsonRpc.odoo_server = $scope.login.server;
		jsonRpc.login($scope.login.db, $scope.login.username, $scope.login.password).then(function (a) {
			$state.go('productSearch');
			cartService.setlogin($scope.login.username,$scope.login.password);
		}, function(e) {
			$scope.errorMessage = e.message;
		});
	}
}]);