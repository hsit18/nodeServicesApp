/**
 * @ngdoc controller
 * @name angularApp.controller:ProductsController
 * @description
 * # ProductsController
 * Products Controller to load product list by category id
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['ProductsService', 'StorageUtil', '$ionicLoading', '$stateParams'];

    function ProductsController(ProductsService, StorageUtil, $ionicLoading, $stateParams) {
    	var vm = this;
        vm.categoryId = $stateParams.id;
        vm.productId = $stateParams.prodid;

        vm.loadProductsByCategoryId = function() {
            $ionicLoading.show();
            ProductsService.getProductsByCategoryId(vm.categoryId).then(function(result) {
                vm.products = result;
                $ionicLoading.hide();
            }, function(error){

            });
        }

        vm.loadProductDetailByProductId = function() {
            $ionicLoading.show();
            ProductsService.getProductDetailByProductId(vm.productId).then(function(result) {
                vm.productObj = result[0];
                $ionicLoading.hide();
            }, function(error){

            });
        }

        if(vm.productId) {
            vm.loadProductDetailByProductId();
        } else {
            vm.loadProductsByCategoryId();
        }
    }

})();
