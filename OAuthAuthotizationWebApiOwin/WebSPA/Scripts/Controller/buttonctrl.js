/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var ButtonCtrl = (function () {
        function ButtonCtrl(scope) {
            this.$scope = scope;
        }
        ButtonCtrl.$inject = ["$scope"];
        return ButtonCtrl;
    }());
    appOwin.ButtonCtrl = ButtonCtrl;
    appModule.app.controller('ButtonCtrl', ButtonCtrl);
})(appOwin || (appOwin = {}));
