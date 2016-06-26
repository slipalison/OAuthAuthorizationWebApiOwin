/// <reference path="../_reference.ts" />
module appOwin {
    'use strict';
    export class HomeCtrl {
        $scope: ng.IScope;
        static $inject = ["$scope"];
        constructor(scope: ng.IScope) {
            this.$scope = scope;
        }
    }
    appModule.app.controller('HomeCtrl', HomeCtrl);
}