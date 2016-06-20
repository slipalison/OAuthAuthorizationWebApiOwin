/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />
/// <reference path="_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when('/login', {
                controllerAs: 'vm',
                controller: 'LoginCtrl',
                templateUrl: '/login.html'
            }).when('/', {
                controllerAs: 'vm',
                controller: 'HomeCtrl',
                templateUrl: '/wwwroot/pages/home.html'
            }).when('/Theming', {
                controllerAs: 'vm',
                controller: 'ThemingCtrl',
                templateUrl: '/wwwroot/pages/Theming.html'
            }).otherwise({
                controllerAs: 'vm',
                controller: 'HomeCtrl',
                templateUrl: '/wwwroot/pages/404.html'
            });
        }
        Config.$inject = ['$routeProvider'];
        return Config;
    }());
    appOwin.Config = Config;
    angular.module('owin', ['ngRoute']).config(Config);
})(appOwin || (appOwin = {}));
//# sourceMappingURL=route.js.map