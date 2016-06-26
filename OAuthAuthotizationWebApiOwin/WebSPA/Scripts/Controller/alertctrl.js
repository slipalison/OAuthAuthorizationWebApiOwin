/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var AlertCtrl = (function () {
        function AlertCtrl(scope) {
            this.$scope = scope;
        }
        AlertCtrl.$inject = ["$scope"];
        return AlertCtrl;
    }());
    appOwin.AlertCtrl = AlertCtrl;
    appModule.app.controller('AlertCtrl', AlertCtrl);
})(appOwin || (appOwin = {}));
