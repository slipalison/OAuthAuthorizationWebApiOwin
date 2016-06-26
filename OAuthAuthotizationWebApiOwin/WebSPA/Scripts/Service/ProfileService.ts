/// <reference path="../_reference.ts" />
module appOwin {
    'use strict';
    export class ProfileService {
        static $inject = ['$http', '$q'];
        uri: string;

        constructor(public $http: ng.IHttpService, public $q: ng.IQService) {
            this.uri = `${appModule.url}api/v1/autentication/GetUser`;
        }

        get(): ng.IPromise<Profile> {
            var deferred = this.$q.defer();

            this.$http.get(this.uri).then(response => {
                deferred.resolve(response.data);
            }).catch(reason => {
                deferred.reject(reason);
            });
            return deferred.promise;
        }
    }
    appModule.app.service('ProfileService', ProfileService);
}