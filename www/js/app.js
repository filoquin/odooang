// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova','ui.router', 'odoo','ngCookies','ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.run(['jsonRpc', '$state', '$rootScope', function (jsonRpc, $state, $rootScope) {
  jsonRpc.errorInterceptors.push(function (a) {
    $state.go('login');
    console.log('error : ', a);  
  });

}])
.config(['$stateProvider','$urlRouterProvider' , function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('productSearch', {
    url: '/',
    templateUrl: 'productSearch/productSearch.html',
    controller: 'productSearch'

  }).state('productDetail', {
    url: '/productDetail/{id}',
    templateUrl: 'productDetail/productDetail.html',
    controller: 'productDetail'

  }).state('cart', {
    url: '/cart',
    templateUrl: 'cart/cart.html',
    controller: 'cart'

  }).state('login', {
    url: '/login',
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });


  $urlRouterProvider.otherwise('/login');
}]);
