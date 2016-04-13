/**
 * @ngdoc service
 * @name angularApp.service:MainService
 * @description
 * # MainService
 * Main Service for main controller
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .service('MainService', MainService);

    MainService.$inject = ['$http', '$q'];

    function MainService($http, $q) {

        var service = {
            getHomePageData: getHomePageData
        };

        return service;

        function getHomePageData() {

            var deferred = $q.defer();
            deferred.resolve({'content': "Welcome to home page"});
            return deferred.promise;
        }
    }

})();