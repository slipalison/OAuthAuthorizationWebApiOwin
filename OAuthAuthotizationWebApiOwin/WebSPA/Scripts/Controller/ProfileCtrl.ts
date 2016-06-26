/// <reference path="../_reference.ts" />
module appOwin {
    'use strict';
    interface IProfileScope extends ng.IScope {
        profile: Profile;
    }

    export class ProfileCtrl {
        static $inject = ['$scope', 'ProfileService'];
        static scope: IProfileScope;
        constructor(public $scope: IProfileScope, public profileService: ProfileService) {
            
            var promise = profileService.get();
            promise.then(response => {
                console.log(response);
                $scope.profile = response;
                //ProfileCtrl.scope.profile = response;
            });
        }

        Logout() {
            console.info('oi');
            window.localStorage.removeItem('Utoken');
            window.location.href = 'http://localhost:10498/login.html';
        }
    }
    appModule.app.controller('ProfileCtrl', ProfileCtrl);

      /*
    appModule.app.controller('ProfileCtrl', ['$scope', '$http', 'ProfileService', function ($scope, $http, ProfileService) {


        var authData = JSON.parse(window.localStorage.getItem('Utoken'));

        $http({
            method: 'GET',
            url: `${appModule.url}api/v1/autentication/GetUser`,
            headers: {
                'Authorization': 'Bearer ' + authData.access_token
            }
        }).then(function (response) {

            $scope.profile = response.data;

        });

    }]);
    */
}