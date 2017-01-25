'use strict';
angular.module('starter').controller('productDetail', ['$scope','$stateParams','jsonRpc', function ($scope, $stateParams,jsonRpc) {
 
    var leafs = [['active','=',true],['id','=',$stateParams.id]];

    var result=jsonRpc.searchRead('product.product', leafs, 
        ['default_code','name','qty_available','price_with_tax','description','image_small'],0,1,{} ).then(
            function(result) {
       

               $scope.warehouses = {'1':'Todos','7':'Outlet Perito Moreno 325','8':'GODOY 2da','9':'OUTLET 2da','10':'GRAL. PAZ 2da','11':'TALLER CIPOLLETTI','12':'Deposito Esmeralda','13':'Deposito Esmeralda 2','14':'PERITO 2da','15':'CIPOLLETTI 2da','17':'PLANAS 2da','18':'Deposito Cutral-Co','2':'Perito Moreno Salon','3':'Deposito Gral Paz','4':'Deposito Godoy','5':'Deposito Cipolletti','6':'Depósito TL Planas','19':'Deposito STA. CRUZ','20' :'Deposito Plottier','22':'Bazar Cipolletti'};


               $scope.item = result['records'][0];
               $scope.item.prices={};
               $scope.item.stocks=[];


               var prices = jsonRpc.execute('product.pricelist', 'price_get',[[2,3,31],result['records'][0]['id'],1]).then(
                        function(resultPrice) {
                            $scope.item.prices=resultPrice;
                        });

               
                var stock=jsonRpc.searchRead('stock.availability', [['product_id' , '=',result['records'][0]['id']]], 
                        ['virtual_available','warehouse_id','warehouse_id.name'],0,99,{}).then(
                        function(resultStock) {
                            $scope.item.stocks=resultStock['records'];
                        });



     
   });


 
}]);
