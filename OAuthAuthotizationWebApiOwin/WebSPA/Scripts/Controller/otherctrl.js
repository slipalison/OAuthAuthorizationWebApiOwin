/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var OtherCtrl = (function () {
        function OtherCtrl(scope) {
            this.$scope = scope;
        }
        OtherCtrl.$inject = ["$scope"];
        return OtherCtrl;
    }());
    appOwin.OtherCtrl = OtherCtrl;
    appModule.app.controller('OtherCtrl', OtherCtrl);
})(appOwin || (appOwin = {}));
