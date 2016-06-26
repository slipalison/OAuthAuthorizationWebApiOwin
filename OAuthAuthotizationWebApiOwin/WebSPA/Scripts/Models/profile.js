/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    var Profile = (function () {
        function Profile(id, name, email, active) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.active = active;
        }
        return Profile;
    }());
    appOwin.Profile = Profile;
})(appOwin || (appOwin = {}));
