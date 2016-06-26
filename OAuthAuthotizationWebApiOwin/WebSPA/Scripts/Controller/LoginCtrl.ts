/// <reference path="../_reference.ts" />
module appOwin {
    'use strict';
    export class LoginCtrl {
        $scope: any;
        $location: any;
        $http: ng.IHttpService;
        login: ILogin;
        static $inject = ['$scope', '$location', '$http'];
        constructor(scope: ng.IScope, local: ng.ILocationService, http: ng.IHttpService) {
            this.$scope = scope;
            this.$location = local;
            this.$http = http;
            this.login = { email: "alison@amorim.com", pass: "testando" };
            this.$scope.login = this.login;
        }
        Send() {
            var data = `grant_type=password&username=${this.$scope.login.email}&password=${this.$scope.login.pass}`;
            this.$http.post('http://localhost:10498/server/api/security/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function (result) {
                    console.log(result);
                    window.localStorage.setItem('Utoken', JSON.stringify(result));
                    window.location.href = 'http://localhost:10498/';
                });
        }
    }
    export interface ILogin {
        email: string,
        pass: string,
    }
    appModule.app.controller('LoginCtrl', LoginCtrl);
}