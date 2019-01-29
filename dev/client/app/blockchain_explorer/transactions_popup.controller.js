(function () {
  angular
    .module('MyBlockchain')
    .controller('showTransactionsCtrl', showTransactionsCtrl)

  function showTransactionsCtrl($scope, $mdDialog, dataToPass) {
    var self = this;
    $scope.mdDialogData = dataToPass;
    //console.log($scope.mdDialogData);

    $scope.cancel = function () {
      $mdDialog.hide();
    };
  }
})();

