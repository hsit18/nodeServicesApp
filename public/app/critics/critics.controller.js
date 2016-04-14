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
        .controller('CriticsController', CriticsController);

    CriticsController.$inject = ['CriticsService', 'StorageUtil', '$location', 'CONSTANTS', '$stateParams', '$ionicLoading'];

    function CriticsController(CriticsService, StorageUtil, $location, CONSTANTS, $stateParams, $ionicLoading) {

        var vm = this;
        
        vm.loadCritics = function() {
            $ionicLoading.show();
            CriticsService.getCriticsData().then(function(result) {
                vm.categories = result;
                $ionicLoading.hide();
            }, function(error){

            });
        }

        vm.loadCritics();
    }

})();
