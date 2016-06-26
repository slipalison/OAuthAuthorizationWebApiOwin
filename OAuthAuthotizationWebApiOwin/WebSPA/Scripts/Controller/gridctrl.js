/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var GridCtrl = (function () {
        function GridCtrl(scope) {
            this.$scope = scope;
        }
        GridCtrl.$inject = ["$scope"];
        return GridCtrl;
    }());
    appOwin.GridCtrl = GridCtrl;
    appModule.app.controller('GridCtrl', GridCtrl);
})(appOwin || (appOwin = {}));
