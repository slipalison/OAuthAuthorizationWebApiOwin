/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var ApiCallInterceptor = (function () {
        function ApiCallInterceptor($q) {
            var _this = this;
            this.$q = $q;
            // created as instance method using arrow function (see notes)
            this.request = function (config) {
                // console.info('Request:', config);
                config.headers = config.headers || {};
                var authData = JSON.parse(window.localStorage.getItem('Utoken'));
                if (authData) {
                    config.headers['Authorization'] = 'Bearer ' + authData.access_token;
                }
                // modify config
                return config;
            };
            // created as instance method using arrow function (see notes)
            this.response = function (response) {
                // console.info('Response:', response);
                //if (response.status === 401) {
                //    this.$location.path('/login');
                //}
                // modify response
                return _this.$q.when(response);
            };
        }
        // @ngInject
        ApiCallInterceptor.factory = function ($q) {
            return new ApiCallInterceptor($q);
        };
        return ApiCallInterceptor;
    }());
    var httpConfig = function ($httpProvider) {
        /* push the factory function to the array of $httpProvider
         * interceptors (implements IHttpInterceptorFactory) */
        $httpProvider.interceptors.push(ApiCallInterceptor.factory);
    };
    appModule.app.config(httpConfig);
})(appOwin || (appOwin = {}));
