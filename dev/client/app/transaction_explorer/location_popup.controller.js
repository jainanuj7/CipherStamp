(function () {
    angular
      .module('MyBlockchain')
      .controller('locationCtrl', locationCtrl)
  
    function locationCtrl($scope, $mdDialog, dataToPass, $http, NgMap) {
      var self = this;
      $scope.mdDialogData = dataToPass;
      console.log($scope.mdDialogData);
      NgMap.getMap().then(function(map) {
      });
     
      $scope.cancel = function () {
        $mdDialog.hide();
      };
    }
  })();
  
  