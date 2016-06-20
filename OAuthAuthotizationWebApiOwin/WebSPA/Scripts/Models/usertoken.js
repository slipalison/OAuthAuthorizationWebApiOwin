var appOwin;
(function (appOwin) {
    'use strict';
    var UserToken = (function () {
        function UserToken(title, userName, token) {
            this.title = title;
            this.userName = userName;
            this.token = token;
        }
        return UserToken;
    }());
    appOwin.UserToken = UserToken;
})(appOwin || (appOwin = {}));
