/**
 * @ngdoc service
 * @name angularApp.service:CategoriesService
 * @description
 * # CategoriesService
 * Categories Service for Categories controller
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .service('CategoriesService', CategoriesService);

    CategoriesService.$inject = ['$http', '$q', 'CONSTANTS'];

    function CategoriesService($http, $q, CONSTANTS) {

        var service = {
            getCategoriesData: getCategoriesData
        };

        return service;

        function getCategoriesData(categoryId) {

            var deferred = $q.defer();
            $http.get( CONSTANTS.API_URL + 'api/ecom/getCategoriesById/'+categoryId).then(function(response) {
                console.log(response.data);
                if(response && response.data) {
                    var responseObj = JSON.parse(response.data);
                    deferred.resolve(responseObj.results);
                }
            }, function(error) {
                console.log(error);
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }

})();
