/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var CardCtrl = (function () {
        function CardCtrl(scope) {
            this.$scope = scope;
        }
        CardCtrl.$inject = ["$scope"];
        return CardCtrl;
    }());
    appOwin.CardCtrl = CardCtrl;
    appModule.app.controller('CardCtrl', CardCtrl);
})(appOwin || (appOwin = {}));
