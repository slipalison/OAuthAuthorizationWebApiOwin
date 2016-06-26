/// <reference path="_reference.ts" />

module appOwin {
    'use strict'
    function start($rootScope: IRootScope) {

        var uToken: string = localStorage.getItem('Utoken');
        if (!uToken) {
            $rootScope.UToken = null;
        } else {
            $rootScope.UToken = angular.fromJson(uToken);
        }
    }

    start.$inject = ['$rootScope'];
    appModule.app.run(start);
}