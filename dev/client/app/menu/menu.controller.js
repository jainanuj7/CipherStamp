(function() {
    'use strict';
    angular
        .module('MyBlockchain')
        .controller('MenuCtrl', MenuCtrl);

    function MenuCtrl($scope, navService, $window) {
        
        $scope.menuItems = [];
        navService.loadMenuItems()
            .then(function(menuItems) {
                $scope.menuItems = [].concat(menuItems);
        });

        $scope.redirectHome = function() {
            $window.location.href = '/home.html';
        }

    }

})();
