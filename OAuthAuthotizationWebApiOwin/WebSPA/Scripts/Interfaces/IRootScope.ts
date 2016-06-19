/// <reference path="../_reference.ts" />
module appOwin {
    'use strict'
    export interface IRootScope extends ng.IRootScopeService {
        UToken: UserToken;
    }
    export interface IApp extends ng.IModule { }
}