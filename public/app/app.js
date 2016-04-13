/**
 * @ngdoc module.
 * @name angularApp
 * @description
 * # angularApp
 * Main module of the application
 */

 (function() {
    'use strict';
    angular
        .module('angularApp', [
            'UtilApp'
        ])
        .run(["$rootScope", "$state", "$ionicPlatform", "loginAuthenticationFactory", function($rootScope, $state, $ionicPlatform, loginAuthenticationFactory) {
            $ionicPlatform.ready(function() {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });

            $rootScope.$on("$stateChangeError", function(event, toState, previous) {
                console.log("Error State Name: "+toState.name);
            });

            $rootScope.$on( '$stateChangeStart', function(e, toState  , toParams, fromState, fromParams) {

                var userId = loginAuthenticationFactory.getLoggedInUserId();
                var isLogin = toState.name === "login";

                if(isLogin && userId){
                    e.preventDefault(); // stop current execution
                    $state.go('app.home'); // go to app
                } else if(isLogin) {
                     return; // no need to redirect
                }

                if(!userId) {
                    e.preventDefault(); // stop current execution
                    $state.go('login'); // go to login
                }
            });

        }]);
})();
