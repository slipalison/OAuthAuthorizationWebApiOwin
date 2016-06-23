/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    ;
    var User = (function () {
        function User(Id, Name, Email, Active) {
            this.Id = Id;
            this.Name = Name;
            this.Email = Email;
            this.Active = Active;
        }
        return User;
    }());
    var ProfileCtrl = (function () {
        function ProfileCtrl($scope, $local, $http) {
            this.$local = $local;
            this.$http = $http;
            ProfileCtrl.scope = $scope;
            ProfileCtrl.scope['user'] = { Name: "Alison de Amorim", Email: "alisonmsn@hotmail.com" };
            $scope.user = { Name: "Alison de Amorim", Email: "alisonmsn@hotmail.com" };
            var userScope = ProfileCtrl.scope;
            this.$http({
                method: 'POST',
                url: 'http://localhost:10498/server/api/v1/autentication/GetUser'
            }).then(function successCallback(response) {
                var data = JSON.parse(response.data['user']);
                ProfileCtrl.scope['user'] = new User(data.Id, data.Name, data.Email, data.Active);
                //ProfileCtrl.prototype.buildUser(data);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
        ProfileCtrl.prototype.buildUser = function (data) {
            ProfileCtrl.scope['user'] = new User(data.Id, data.Name, data.Email, data.Active);
        };
        ProfileCtrl.prototype.GetAuth = function () {
            var userScope = ProfileCtrl.scope;
            this.$http({
                method: 'POST',
                url: 'http://localhost:10498/server/api/v1/autentication/GetUser'
            }).then(function successCallback(response) {
                var data = JSON.parse(response.data['user']);
                ProfileCtrl.scope['user'] = new User(data.Id, data.Name, data.Email, data.Active);
                // userScope.user = new User(data.Id, data.Name, data.Email, data.Active);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        };
        ProfileCtrl.prototype.Logout = function () {
            window.localStorage.removeItem('Utoken');
            window.location.href = 'http://localhost:10498/login.html';
        };
        ProfileCtrl.$inject = ['$scope', '$location', '$http'];
        return ProfileCtrl;
    }());
    appOwin.ProfileCtrl = ProfileCtrl;
    angular.module('owin').controller('ProfileCtrl', ProfileCtrl);
})(appOwin || (appOwin = {}));
//# sourceMappingURL=profilectrl.js.map