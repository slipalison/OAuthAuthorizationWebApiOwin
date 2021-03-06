/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var LoginCtrl = (function () {
        function LoginCtrl(scope, local, http) {
            this.$scope = scope;
            this.$location = local;
            this.$http = http;
            this.login = { email: "alison@amorim.com", pass: "testando" };
            this.$scope.login = this.login;
        }
        LoginCtrl.prototype.Send = function () {
            var data = "grant_type=password&username=" + this.$scope.login.email + "&password=" + this.$scope.login.pass;
            this.$http.post('http://localhost:10498/server/api/security/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function (result) {
                console.log(result);
                window.localStorage.setItem('Utoken', JSON.stringify(result));
                window.location.href = 'http://localhost:10498/';
            });
        };
        LoginCtrl.$inject = ['$scope', '$location', '$http'];
        return LoginCtrl;
    }());
    appOwin.LoginCtrl = LoginCtrl;
    appModule.app.controller('LoginCtrl', LoginCtrl);
})(appOwin || (appOwin = {}));
