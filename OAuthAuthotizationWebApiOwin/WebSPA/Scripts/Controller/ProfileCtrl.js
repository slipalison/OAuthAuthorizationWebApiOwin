/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var ProfileCtrl = (function () {
        function ProfileCtrl($scope, $local, $http) {
            this.$scope = $scope;
            this.$local = $local;
            this.$http = $http;
        }
        ProfileCtrl.prototype.Logout = function () {
            window.localStorage.removeItem('Utoken');
            window.location.href = 'http://localhost:10498/login.html';
        };
        ProfileCtrl.$inject = ['$scope', '$location', '$http'];
        return ProfileCtrl;
    }());
    appOwin.ProfileCtrl = ProfileCtrl;
    angular.module('owin').controller('ProfileCtrl', ProfileCtrl);
})(appOwin || (appOwin = {}));
//# sourceMappingURL=profilectrl.js.map