/**
 * @ngdoc constants
 * @name angularApp.constant:CONSTANTS
 * @description
 * # CONSTANTS
 * CONSTANTS used for util App
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .constant('CONSTANTS', {
            API_URL: 'https://mean-category.herokuapp.com/',
            //API_URL: 'http://localhost:8080/'
        });
})();
