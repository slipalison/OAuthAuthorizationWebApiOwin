/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var StepCtrl = (function () {
        function StepCtrl(scope) {
            this.$scope = scope;
        }
        StepCtrl.$inject = ["$scope"];
        return StepCtrl;
    }());
    appOwin.StepCtrl = StepCtrl;
    appModule.app.controller('StepCtrl', StepCtrl);
})(appOwin || (appOwin = {}));
