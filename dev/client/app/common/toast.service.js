(function () {
    'use strict';
    angular
        .module('MyBlockchain')
        .service('toastService', toastService);

    function toastService($mdToast) {
        var service = {};
        service.Notify = function (msg) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(msg)
                    .position('right bottom')
                    .action('OK')
            );
        }

        return service;
    }
})();    