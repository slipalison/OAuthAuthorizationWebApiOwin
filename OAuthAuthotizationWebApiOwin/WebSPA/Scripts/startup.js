/// <reference path="_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    function start($rootScope) {
        var uToken = localStorage.getItem('Utoken');
        if (!uToken) {
            $rootScope.UToken = null;
        }
        else {
            $rootScope.UToken = angular.fromJson(uToken);
        }
    }
    start.$inject = ['$rootScope'];
    angular.module('owin').run(start);
})(appOwin || (appOwin = {}));
