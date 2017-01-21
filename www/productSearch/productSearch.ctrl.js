'use strict';


angular.module('starter').controller('productSearch', ['$scope','jsonRpc', function ($scope, jsonRpc) {
    $scope.loading = false; 
    $scope.hasStock =true ;
    $scope.priceLists =[{'id':2,'label':'principal'},{'id':31,'label':'12 y 18'}] ;

    $scope.warehouses = [{'id':1, 'label' :'Todos'},{'id':7, 'label' :'Outlet Perito Moreno 325'},{'id':8, 'label' :'GODOY 2da'},{'id':9, 'label' :'OUTLET 2da'},{'id':10, 'label' :'GRAL. PAZ 2da'},{'id':11, 'label' :'TALLER CIPOLLETTI'},{'id':12, 'label' :'Deposito Esmeralda'},{'id':13, 'label' :'Deposito Esmeralda 2'},{'id':14, 'label' :'PERITO 2da'},{'id':15, 'label' :'CIPOLLETTI 2da'},{'id':17, 'label' :'PLANAS 2da'},{'id':18, 'label' :'Deposito Cutral-Co'},{'id':2, 'label' :'Perito Moreno Salon'},{'id':3, 'label' :'Deposito Gral Paz'},{'id':4, 'label' :'Deposito Godoy'},{'id':5, 'label' :'Deposito Cipolletti'},{'id':6, 'label' :'Depósito TL Planas'},{'id':19, 'label' :'Deposito STA. CRUZ'},{'id':20, 'label' :'Deposito Plottier'}]

    $scope.search = function (){
    
        $scope.loading = true; 

        $scope.productList = [];
    //
        if ($scope.textSearch.length > 0 ) {
            var words = $scope.textSearch.split(" ");
            var leafs = [];
            var context ={};
            for (var i = 0; i < words.length; i++) {
                leafs.push(['name','ilike',"%"+ words[i] +"%"]);
            } 
            if ($scope.hasStock){
                leafs.push(['qty_available','>',1]);                
            }
            if ($scope.selectedList){
                  context.pricelist = $scope.selectedList.id;
            }
            if ($scope.selectedWarehouse){
                  context.warehouse = $scope.selectedWarehouse.id;
            }
            var result=jsonRpc.searchRead('product.product', leafs, ['default_code','name','qty_available','price_with_tax'],0,40,context ).then(function(result) {
               $scope.loading = false; 
               
               $scope.productList = result['records'];
               $scope.product_count = result['length'];

           });
        } 

    }
}]);
