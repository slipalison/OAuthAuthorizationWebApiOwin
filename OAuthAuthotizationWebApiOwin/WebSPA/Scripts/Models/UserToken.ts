module appOwin {
    'use strict';
    export class UserToken {
        constructor(public title: string,
            public userName: string,
            public token: string) { }
    }
}