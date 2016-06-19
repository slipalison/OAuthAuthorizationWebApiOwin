/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />
/// <reference path="_reference.ts" />

module appOwin {
    'use strict'
    export class Config {
        static $inject = ['$routeProvider'];
        constructor($routeProvider: ng.route.IRouteProvider) {
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
    }
    angular.module('owin', ['ngRoute']).config(Config);
}