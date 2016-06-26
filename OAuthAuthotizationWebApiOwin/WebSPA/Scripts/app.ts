/// <reference path="_reference.ts" />
module appOwin {
    'use strict';
    export class App {
        app: ng.IModule;
        url: string;
        constructor(_app: ng.IModule) {
            this.app = _app;
            this.url = 'http://localhost:10498/server/';
        }
    }
}
var appModule = new appOwin.App(angular.module('owin', ['ngRoute']));

module appOwinBase {
    'use strict';
    export class Module {
        app: ng.IModule;

        constructor(name: string, modules: Array<string>) {
            this.app = angular.module(name, modules);
        }

        addController(name: string, controller: Function): void {
            this.app.controller(name, controller);
        }

        addService(name: string, service: Function): void {
            this.app.service(name, service);
        }

    } // Module class
}

module appOwin {
    var myApp = new appOwinBase.Module('myTestApp', ['ngRoute']);
    //myApp.addController('myController', MyController);
}