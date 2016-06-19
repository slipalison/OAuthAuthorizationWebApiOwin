/// <reference path="../_reference.ts" />
module appOwin {
    'use strict'
    export class ThemingCtrl {
        $scope: any;
        static $inject = ['$scope'];
        constructor(scope: ng.IScope) {
            this.$scope = scope;
        }
    }
    angular.module('owin').controller('ThemingCtrl', ThemingCtrl);
}