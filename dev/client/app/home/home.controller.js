(function() {
    'use strict';
    angular
        .module('MyBlockchain')
        .controller('homeCtrl', homeCtrl);

    function homeCtrl($location, $window) {
        console.log($location.absUrl());
        var baseUrl = $location.absUrl().split('#')[0];
        $window.location.href = baseUrl + 'home.html';
    }

})();
