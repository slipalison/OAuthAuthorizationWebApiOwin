/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var ProfileService = (function () {
        function ProfileService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.uri = appModule.url + "api/v1/autentication/GetUser";
        }
        ProfileService.prototype.get = function () {
            var deferred = this.$q.defer();
            this.$http.get(this.uri).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        ProfileService.$inject = ['$http', '$q'];
        return ProfileService;
    }());
    appOwin.ProfileService = ProfileService;
    appModule.app.service('ProfileService', ProfileService);
})(appOwin || (appOwin = {}));
