/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var ListCtrl = (function () {
        function ListCtrl(scope) {
            this.$scope = scope;
        }
        ListCtrl.$inject = ["$scope"];
        return ListCtrl;
    }());
    appOwin.ListCtrl = ListCtrl;
    appModule.app.controller('ListCtrl', ListCtrl);
})(appOwin || (appOwin = {}));
