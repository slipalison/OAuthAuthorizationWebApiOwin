/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var ModalCtrl = (function () {
        function ModalCtrl(scope) {
            this.$scope = scope;
        }
        ModalCtrl.$inject = ["$scope"];
        return ModalCtrl;
    }());
    appOwin.ModalCtrl = ModalCtrl;
    appModule.app.controller('ModalCtrl', ModalCtrl);
})(appOwin || (appOwin = {}));
