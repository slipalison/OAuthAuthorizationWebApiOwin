/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var HomeCtrl = (function () {
        function HomeCtrl(scope) {
            this.$scope = scope;
        }
        HomeCtrl.$inject = ["$scope"];
        return HomeCtrl;
    }());
    appOwin.HomeCtrl = HomeCtrl;
    appModule.app.controller('HomeCtrl', HomeCtrl);
})(appOwin || (appOwin = {}));
