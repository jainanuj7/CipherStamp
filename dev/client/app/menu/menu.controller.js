(function() {
    'use strict';
    angular
        .module('MyBlockchain')
        .controller('MenuCtrl', MenuCtrl);

    function MenuCtrl($scope, navService, $window, $state) {
        
        $scope.menuItems = [];
        navService.loadMenuItems()
            .then(function(menuItems) {
                $scope.menuItems = [].concat(menuItems);
        });

        $scope.redirectHome = function() {
            $window.location.href = '/home.html';
        }

        $scope.redirectState = function(stateName) {
            $state.go(stateName);
        }

    }

})();
