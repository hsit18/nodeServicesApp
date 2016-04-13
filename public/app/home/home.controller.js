/**
 * @ngdoc controller
 * @name angularApp.controller:HomeController
 * @description
 * # HomeController
 * Home Controller loads home page data
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['HomeService', 'StorageUtil', '$location', "$state"];

    function HomeController(HomeService, StorageUtil, $location, $state) {
    	var vm = this;
        vm.loadHomePageData = function() {
            HomeService.getHomePageData().then(function(result) {
                vm.content = result.content;
                //$state.go('app.categories');
            }, function(error){

            });
        }

        vm.logoutUser = function() {
            var status = StorageUtil.removeSession('userId');
            if(status) {
                $location.path('/login');
            }
        }

        vm.loadHomePageData();
    }

})();
