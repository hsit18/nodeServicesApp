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
        .service('CriticsService', CriticsService);

    CriticsService.$inject = ['$http', '$q', 'CONSTANTS'];

    function CriticsService($http, $q, CONSTANTS) {

        var service = {
            getCriticsData: getCriticsData
        };

        return service;

        function getCriticsData() {
            var url = 'https://www.flickstree.com/api_service_120v.php?VERSION=1.20&FTOKEN=b6c6eb93c215db92022f&SESSION=4783347878344378&ENCODING=JSON&METHOD=GET_MOVIE_REVIEWS&movie_id=0c01f8e8863baa7';
            var deferred = $q.defer();
            $http.get(url).then(function(response) {
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
