(function () {
    angular
      .module('MyBlockchain')
      .controller('downloadFileCtrl', downloadFileCtrl)
  
    function downloadFileCtrl($scope, $mdDialog, dataToPass, $http) {
      var self = this;
      $scope.mdDialogData = dataToPass;
      $scope.showUploadButton = true;
      console.log($scope.mdDialogData);
  
      $scope.decryptDownload = function() {
        

      }
      $scope.cancel = function () {
        $mdDialog.hide();
      };
    }
  })();
  
  