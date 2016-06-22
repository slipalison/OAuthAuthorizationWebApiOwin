/// <reference path="../_reference.ts" />
module appOwin {

    export class BearerAuthIntercepto {
        static $inject = ['$q', '$window'];
        constructor(public $q: ng.IQService, public $window: ng.IWindowService) {

        }
        request(config:any) {
            config.headers = config.headers || {};
            if (this.$window.localStorage.getItem('Utoken')) {
                // may also use sessionStorage
                config.headers.Authorization = 'Bearer ' + this.$window.localStorage.getItem('Utoken');
            }
            return config || this.$q.when(config);
        }
        response(response) {
            if (response.status === 401) {
                //  Redirect user to login page / signup Page.
                this.$window.location.href = 'http://localhost:10498/login.html';
            }
            return response || this.$q.when(response);
        }

    }

    angular.module('owin').factory('BearerAuthIntercepto', BearerAuthIntercepto);
   // angular.module('owin').config(function ($httpProvider) { $httpProvider.interceptors.push('BearerAuthInterceptor'); });
}


