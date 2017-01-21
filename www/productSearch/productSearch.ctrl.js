'use strict';


angular.module('starter').controller('productSearch', ['$scope','jsonRpc', function ($scope, jsonRpc) {
    $scope.loading = false; 
    $scope.hasStock =1 ;
    $scope.priceLists =[{'id':1,'label':'principal'}] ;
    $scope.search = function (){
        $scope.loading = true; 

        $scope.productList = [];
    //
        if ($scope.textSearch.length > 3 ) {
            var words = $scope.textSearch.split(" ");
            var leafs = [];
            for (var i = 0; i < words.length; i++) {
                leafs.push(['name','ilike',"%"+ words[i] +"%"]);
            } 
            if ($scope.hasStock){
                leafs.push(['qty_available','>',1]);                
            }
            var result=jsonRpc.searchRead('product.product', leafs, ['default_code','name','qty_available'] ).then(function(result) {
               $scope.loading = false; 
               
               $scope.productList = result['records'];
               $scope.product_count = result['length'];

           });
        } 

    }
}]);
