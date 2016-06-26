/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    'use strict';
    var ProfileCtrl = (function () {
        function ProfileCtrl($scope, profileService) {
            this.$scope = $scope;
            this.profileService = profileService;
            var promise = profileService.get();
            promise.then(function (response) {
                console.log(response);
                $scope.profile = response;
                //ProfileCtrl.scope.profile = response;
            });
        }
        ProfileCtrl.prototype.Logout = function () {
            console.info('oi');
            window.localStorage.removeItem('Utoken');
            window.location.href = 'http://localhost:10498/login.html';
        };
        ProfileCtrl.$inject = ['$scope', 'ProfileService'];
        return ProfileCtrl;
    }());
    appOwin.ProfileCtrl = ProfileCtrl;
    appModule.app.controller('ProfileCtrl', ProfileCtrl);
})(appOwin || (appOwin = {}));
