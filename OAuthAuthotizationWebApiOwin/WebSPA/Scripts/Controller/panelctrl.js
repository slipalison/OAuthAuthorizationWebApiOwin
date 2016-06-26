/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var PanelCtrl = (function () {
        function PanelCtrl(scope) {
            this.$scope = scope;
        }
        PanelCtrl.$inject = ["$scope"];
        return PanelCtrl;
    }());
    appOwin.PanelCtrl = PanelCtrl;
    appModule.app.controller('PanelCtrl', PanelCtrl);
})(appOwin || (appOwin = {}));
