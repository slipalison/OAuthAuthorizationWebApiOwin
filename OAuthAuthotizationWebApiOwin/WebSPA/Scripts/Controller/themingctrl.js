/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var ThemingCtrl = (function () {
        function ThemingCtrl(scope) {
            this.$scope = scope;
        }
        ThemingCtrl.$inject = ['$scope'];
        return ThemingCtrl;
    }());
    appOwin.ThemingCtrl = ThemingCtrl;
    angular.module('owin').controller('ThemingCtrl', ThemingCtrl);
})(appOwin || (appOwin = {}));
//# sourceMappingURL=themingctrl.js.map