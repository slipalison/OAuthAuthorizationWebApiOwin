/// <reference path="../_reference.ts" />
module appOwin {
    'use strict';
    class ApiCallInterceptor implements ng.IHttpInterceptor {
        // @ngInject
        static factory($q: ng.IQService): ApiCallInterceptor {
            return new ApiCallInterceptor($q);
        }

        constructor(private $q: ng.IQService) {}

        // created as instance method using arrow function (see notes)
        request = (config: ng.IRequestConfig): ng.IRequestConfig => {
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
        response = <T>(response: ng.IHttpPromiseCallbackArg<T>): ng.IPromise<T> => {
           // console.info('Response:', response);
            //if (response.status === 401) {
            //    this.$location.path('/login');
            //}
            // modify response

            return this.$q.when(response);
        };
    }

    let httpConfig = ($httpProvider: ng.IHttpProvider) => {
        /* push the factory function to the array of $httpProvider
         * interceptors (implements IHttpInterceptorFactory) */
        $httpProvider.interceptors.push(ApiCallInterceptor.factory);
    };
    appModule.app.config(httpConfig);
}


