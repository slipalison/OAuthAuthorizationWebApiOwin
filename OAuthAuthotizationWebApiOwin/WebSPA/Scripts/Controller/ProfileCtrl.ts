/// <reference path="../_reference.ts" />
module appOwin {
    'use strict'

    interface IMyScope extends ng.IScope { user: User };

    class User {
        constructor(public Id: string, public Name: string, public Email: string, public Active: boolean) { }
    }

    export class ProfileCtrl {



        static $inject = ['$scope', '$location', '$http'];
        static scope: ng.IScope;
        constructor($scope, public $local: ng.ILocationService, public $http: ng.IHttpService) {
           
            ProfileCtrl.scope = $scope;
            ProfileCtrl.scope['user'] = { Name: "Alison de Amorim", Email: "alisonmsn@hotmail.com" };
            $scope.user = { Name: "Alison de Amorim", Email: "alisonmsn@hotmail.com" };
            let userScope = ProfileCtrl.scope;
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

        buildUser(data: any) {
            ProfileCtrl.scope['user'] =  new User(data.Id, data.Name, data.Email, data.Active);
        }

        GetAuth() {
            let userScope = ProfileCtrl.scope;
            this.$http({
                method: 'POST',
                url: 'http://localhost:10498/server/api/v1/autentication/GetUser'
            }).then(function successCallback(response) {
                var data = JSON.parse(response.data['user']);
                ProfileCtrl.scope['user']  = new User(data.Id, data.Name, data.Email, data.Active);
               // userScope.user = new User(data.Id, data.Name, data.Email, data.Active);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        Logout() {
            window.localStorage.removeItem('Utoken');
            window.location.href = 'http://localhost:10498/login.html';
        }

    }
    angular.module('owin').controller('ProfileCtrl', ProfileCtrl);
}