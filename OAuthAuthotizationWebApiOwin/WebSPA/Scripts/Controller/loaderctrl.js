/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var LoaderCtrl = (function () {
        function LoaderCtrl(scope) {
            this.$scope = scope;
        }
        LoaderCtrl.$inject = ["$scope"];
        return LoaderCtrl;
    }());
    appOwin.LoaderCtrl = LoaderCtrl;
    appModule.app.controller('LoaderCtrl', LoaderCtrl);
})(appOwin || (appOwin = {}));
