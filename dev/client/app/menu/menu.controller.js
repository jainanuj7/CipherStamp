(function() {
    'use strict';
    angular
        .module('MyBlockchain')
        .controller('MenuCtrl', MenuCtrl);

    function MenuCtrl($scope, navService,) {
        $scope.menuItems = [];
        navService.loadMenuItems()
            .then(function(menuItems) {
                $scope.menuItems = [].concat(menuItems);
        });

    }

})();
