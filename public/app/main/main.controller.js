/**
 * @ngdoc controller
 * @name angularApp.controller:MainController
 * @description
 * # MainController
 * Main Controller to manage the base app stucture and side menu
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('MainController', MainController);

    MainController.$inject = ['MainService', 'StorageUtil', '$location', "$state"];

    function MainController(MainService, StorageUtil, $location, $state) {
    	var vm = this;
        
        vm.loadHomePageData = function() {
            MainService.getHomePageData().then(function(result) {
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
