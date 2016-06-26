/// <reference path="../_reference.ts" />
module appOwin {
    'use strict';
    export class ModalCtrl {
        $scope: ng.IScope;
        static $inject = ["$scope"];
        constructor(scope: ng.IScope) {
            this.$scope = scope;
        }
    }
    appModule.app.controller('ModalCtrl', ModalCtrl);
}