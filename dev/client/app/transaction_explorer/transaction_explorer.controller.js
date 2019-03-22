(function () {
  angular
    .module('MyBlockchain')
    .controller('transactionExplorerCtrl', transactionExplorerCtrl)

  function transactionExplorerCtrl($http, $interval, $mdDialog, toastService, $scope) {
    var self = this;
    self.blockchain = [];

    self.fetchTransactionList = function () {
      $http.get(`/blockchain`)
        .then(response => {
          self.blockchain = response.data.chain;
          self.transactionList = [];
          self.blockchain.forEach(block => {
            block.transactions.forEach(transaction => {
              self.transactionList.push(transaction)
            })
          })
          // console.log(self.blockchain);
          // console.log(self.transactionList);
          self.transactionList.sort(self.compare);
        });
    }

    //automatically fetch list of transactions after 5seconds
    self.fetchTransactionList();
    $interval(self.fetchTransactionList, 5000);


    //function to sort transactionList by timestamp
    self.compare = function (a, b) {
      const time1 = a.timestamp
      const time2 = b.timestamp

      let comparison = 0;
      if (time1 > time2) {
        comparison = 1;
      } else if (time1 < time2) {
        comparison = -1;
      }
      return comparison * -1;
    }

    self.verifyFile = function (fileInfo) {
      data = { fileInfo : fileInfo};
      $mdDialog.show({
        controller: 'verifyFileCtrl',
        templateUrl: 'app/transaction_explorer/verify_popup.html',
        locals: { dataToPass: data },
        parent: angular.element(document.body),
        clickOutsideToClose: true,
      })
    };

    self.downloadFile = function (fileInfo) {
      data = { fileInfo : fileInfo};
      $mdDialog.show({
        controller: 'downloadFileCtrl',
        templateUrl: 'app/transaction_explorer/download_file_popup.html',
        locals: { dataToPass: data },
        parent: angular.element(document.body),
        clickOutsideToClose: true,
      })
    };

    self.fileLocation = function (fileInfo) {
      data = { fileInfo : fileInfo};
      $mdDialog.show({
        controller: 'locationCtrl',
        templateUrl: 'app/transaction_explorer/location_popup.html',
        locals: { dataToPass: data },
        parent: angular.element(document.body),
        clickOutsideToClose: true,
      })
    };

    $scope.copyNotify = function(parameter) {
      toastService.Notify(parameter + ' copied!');
    }
  }
})();

