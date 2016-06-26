/// <reference path="../_reference.ts" />

module appOwin {
    export class Profile {
        constructor(public id: string, public name: string, public email: string, public active: boolean) { }
    }
}