/// <reference path="_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var App = (function () {
        function App(_app) {
            this.app = _app;
            this.url = 'http://localhost:10498/server/';
        }
        return App;
    }());
    appOwin.App = App;
})(appOwin || (appOwin = {}));
var appModule = new appOwin.App(angular.module('owin', ['ngRoute']));
var appOwinBase;
(function (appOwinBase) {
    'use strict';
    var Module = (function () {
        function Module(name, modules) {
            this.app = angular.module(name, modules);
        }
        Module.prototype.addController = function (name, controller) {
            this.app.controller(name, controller);
        };
        Module.prototype.addService = function (name, service) {
            this.app.service(name, service);
        };
        return Module;
    }());
    appOwinBase.Module = Module; // Module class
})(appOwinBase || (appOwinBase = {}));
var appOwin;
(function (appOwin) {
    var myApp = new appOwinBase.Module('myTestApp', ['ngRoute']);
})(appOwin || (appOwin = {}));
