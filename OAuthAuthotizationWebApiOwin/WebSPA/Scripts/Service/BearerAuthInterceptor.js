/// <reference path="../_reference.ts" />
var appOwin;
(function (appOwin) {
    var BearerAuthIntercepto = (function () {
        function BearerAuthIntercepto($q, $window) {
            this.$q = $q;
            this.$window = $window;
        }
        BearerAuthIntercepto.prototype.request = function (config) {
            config.headers = config.headers || {};
            if (this.$window.localStorage.getItem('Utoken')) {
                // may also use sessionStorage
                config.headers.Authorization = 'Bearer ' + this.$window.localStorage.getItem('Utoken');
            }
            return config || this.$q.when(config);
        };
        BearerAuthIntercepto.prototype.response = function (response) {
            if (response.status === 401) {
                //  Redirect user to login page / signup Page.
                this.$window.location.href = 'http://localhost:10498/login.html';
            }
            return response || this.$q.when(response);
        };
        BearerAuthIntercepto.$inject = ['$q', '$window'];
        return BearerAuthIntercepto;
    }());
    appOwin.BearerAuthIntercepto = BearerAuthIntercepto;
    angular.module('owin').factory('BearerAuthIntercepto', BearerAuthIntercepto);
})(appOwin || (appOwin = {}));
//# sourceMappingURL=bearerauthinterceptor.js.map