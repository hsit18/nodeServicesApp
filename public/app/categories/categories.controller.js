/**
 * @ngdoc controller
 * @name angularApp.controller:CategoriesController
 * @description
 * # CategoriesController
 * Categories Controller loads categories list
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['CategoriesService', 'StorageUtil', '$location', 'CONSTANTS', '$stateParams', '$ionicLoading'];

    function CategoriesController(CategoriesService, StorageUtil, $location, CONSTANTS, $stateParams, $ionicLoading) {

        var vm = this;
        vm.categoryId = ($stateParams.id) ? $stateParams.id : 1;

        vm.loadCategories = function() {
            $ionicLoading.show();
            CategoriesService.getCategoriesData(vm.categoryId).then(function(result) {
                vm.categories = result;
                $ionicLoading.hide();
            }, function(error){

            });
        }

        vm.loadCategories();
    }

})();
