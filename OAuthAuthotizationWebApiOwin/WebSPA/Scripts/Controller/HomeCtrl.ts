/// <reference path="../_reference.ts" />
module appOwin {
    'use strict'
    export class HomeCtrl {
        $scope: any;
        static $inject = ["$scope"];
        constructor(scope: ng.IScope) {
            this.$scope = scope;
        }
    }
    angular.module('owin').controller('HomeCtrl', HomeCtrl);
}