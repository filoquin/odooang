'use strict';


angular.module('starter').controller('productSearch', ['$scope','jsonRpc', function ($scope, jsonRpc) {
    console.log("ahi ");
    $scope.productList=[]    
    $scope.search = function (textSearch){
        if (textSearch.length > 3 ) {
            var words = textSearch.split(" ");
            var leafs = [];
            for (var i = 0; i < words.length; i++) {
                leafs.push(['name','ilike',"%"+ words[i] +"%"]);
            } 
            var result=jsonRpc.searchRead('product.product', leafs, ['default_code','name','qty_available'] ).then(function(result) {
               $scope.productList = result['records'];
               $scope.product_count = result['length'];
           });
        }

    }
}]);
