'use strict';
angular.module('starter').controller('cart', ['$scope','jsonRpc','cartService', function ($scope,jsonRpc,cartService) {
 
    $scope.selectedParner = false;

    $scope.productList = cartService.getAll();

    $scope.add = function (product_id,description,quantity,price) {
      cartService.add(product_id,description,quantity,price);
    };

    $scope.remove = function (product) {
      cartService.remove(product);
    };
   
    $scope.clear = function () {
      cartService.clear();
    };
 
    $scope.dropItem = function (index) {
      cartService.drop(index);
    };

   /*$scope.searchPartner = function (){
    
        $scope.loading = true; 
        $scope.product_count = '...';

        $scope.partnerList = [];
    //
        if ($scope.textSearch.length > 0 ) {
            var words = $scope.textSearch.split(" ");
            var leafs = [['active','=',true]];
            var context ={};
            if (words.length==1){
                leafs.push('|');
                leafs.push(['document_number','=', words[0] ]);
            }
            for (var i = 0; i < words.length; i++) {
                leafs.push(['name','ilike',"%"+ words[i] +"%"]);
            } 
            leafs.push('&');

            leafs.push(['active','=',true]);                
            
            var result=jsonRpc.searchRead('res.partner', leafs, ['document_number','name','email',''],0,40,context ).then(function(result) {
               $scope.loading = false; 
               
               $scope.partnerList = result['records'];
               $scope.partner_count = result['length'];

           });
        } 

    } ;*/
}]);