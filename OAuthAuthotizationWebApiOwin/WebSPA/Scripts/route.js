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
            }).when('/alert', {
                controllerAs: 'vm',
                controller: 'AlertCtrl',
                templateUrl: '/wwwroot/pages/ui-kits/alert.html'
            }).when('/button', {
                controllerAs: 'vm',
                controller: 'ButtonCtrl',
                templateUrl: '/wwwroot/pages/ui-kits/button.html'
            }).when('/card', {
                controllerAs: 'vm',
                controller: 'CardCtrl',
                templateUrl: '/wwwroot/pages/ui-kits/card.html'
            }).when('/grid', {
                controllerAs: 'vm',
                controller: 'GridCtrl',
                templateUrl: '/wwwroot/pages/ui-kits/grid.html'
            }).when('/list', {
                controllerAs: 'vm',
                controller: 'ListCtrl',
                templateUrl: '/wwwroot/pages/ui-kits/list.html'
            }).when('/loader', {
                controllerAs: 'vm',
                controller: 'LoaderCtrl',
                templateUrl: '/wwwroot/pages/ui-kits/loader.html'
            }).when('/modal', {
                controllerAs: 'vm',
                controller: 'ModalCtrl',
                templateUrl: '/wwwroot/pages/ui-kits/modal.html'
            }).when('/panel', {
                controllerAs: 'vm',
                controller: 'PanelCtrl',
                templateUrl: '/wwwroot/pages/ui-kits/panel.html'
            }).when('/step', {
                controllerAs: 'vm',
                controller: 'StepCtrl',
                templateUrl: '/wwwroot/pages/ui-kits/step.html'
            }).when('/themming', {
                controllerAs: 'vm',
                controller: 'ThemmingCtrl',
                templateUrl: '/wwwroot/pages/ui-kits/theming.html'
            }).when('/other', {
                controllerAs: 'vm',
                controller: 'OtherCtrl',
                templateUrl: '/wwwroot/pages/ui-kits/other.html'
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
    appModule.app.config(Config);
})(appOwin || (appOwin = {}));
