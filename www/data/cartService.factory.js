'use strict';


angular.module('starter').factory('cartService', function ($localStorage) {

 $localStorage = $localStorage.$default({
    'default_user': {'login':'','pass':''},
    'product_list': []

  });

var _getLogin = function () {
  return $localStorage.default_user;
};

var _setLogin = function (login,pass) {
  $localStorage.default_user.login = login;
  $localStorage.default_user.pass = pass;
};

var _clear = function (){
  $localStorage.product_list=[]  ;
}
var _getAll = function () {

  return $localStorage.product_list;
};
var _add = function (product_id,description,quantity,price) {
    var product={'product_id':product_id,'description':description,'quantity':quantity,'price':price};
    $localStorage.product_list.push(product);
};
var _remove = function (index) {
  $localStorage.product_list.splice(index, 1);
};
return {
    getAll: _getAll,
    add: _add,
    remove: _remove,
    getlogin :_getLogin,
    setlogin :_setLogin,
    clear :_clear,
    drop : _remove
  };
});
