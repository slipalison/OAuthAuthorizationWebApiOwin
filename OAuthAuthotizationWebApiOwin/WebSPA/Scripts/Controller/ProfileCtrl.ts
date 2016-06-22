/// <reference path="../_reference.ts" />
module appOwin {
    'use strict'
    export class ProfileCtrl {

        Id: string; //= user.Id;
        Name: string; //= user.Name;
        Email: string; //= user.Email.Endereco;
        Active: string; //= user.Active;
        static $inject = ['$scope', '$location', '$http'];

        constructor(public $scope: ng.IScope, public $local: ng.ILocationService, public $http: ng.IHttpService) {
            
        }

        Logout() {
            window.localStorage.removeItem('Utoken');
            window.location.href = 'http://localhost:10498/login.html';
        }

    }
    angular.module('owin').controller('ProfileCtrl', ProfileCtrl);
}