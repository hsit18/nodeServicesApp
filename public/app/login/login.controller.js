/**
 * @ngdoc controller
 * @name angularApp.controller:LoginController
 * @description
 * # LoginController
 * Login Controller to validate user login
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService', 'toastr', '$location', 'StorageUtil', '$loading'];

    function LoginController( LoginService, toastr, $location, StorageUtil, $loading) {
        StorageUtil.setSession('userId', 1);
        $location.path('/home');   

        this.submitForm = function(loginForm) {
            if(loginForm.$valid) {                
                $loading.start('commonLoader');
                LoginService.validateUserLoginDetils(this.loginField.email, this.loginField.password).then(function(result){
                    if(result.LoginStatus === true) {
                        // toastr.success('You are valid User', {
                        //   closeButton: true
                        // });
                         
                        $loading.finish('commonLoader');
                        if(StorageUtil.setSession('userId', result.id)) {
                            $location.path('/home');    
                        }
                        
                    } else {
                        toastr.error('You are not a valid User', {
                          closeButton: true
                        });
                    }
                }, function(error){

                });
            }
        }
    }

})();