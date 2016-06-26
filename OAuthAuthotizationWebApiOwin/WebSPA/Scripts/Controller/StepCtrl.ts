/// <reference path="../_reference.ts" />
module appOwin {
    'use strict';
    export class StepCtrl {
        $scope: ng.IScope;
        static $inject = ["$scope"];
        constructor(scope: ng.IScope) {
            this.$scope = scope;
        }
    }
    appModule.app.controller('StepCtrl', StepCtrl);
}
