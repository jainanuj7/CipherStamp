(function () {
    angular
      .module('MyBlockchain')
      .controller('blockchainExplorerCtrl', blockchainExplorerCtrl)
  
    function blockchainExplorerCtrl($http, $scope, $interval, $mdDialog) {
      var self = this;
      self.blockchain = [];
  
      self.fetchBlockchain = function () {
        $http.get(`/blockchain`)
          .then(response => {
            self.blockchain = response.data.chain;
            self.transactionList = [];
            self.blockchain.forEach(block => {
              block.transactions.forEach(transaction => {
                self.transactionList.push(transaction)
              })
            })
            //console.log(self.blockchain);
            // console.log(self.transactionList);
            self.blockchain.sort(self.compare);
          });
      }
  
      //automatically fetch list of transactions after 5seconds
      self.fetchBlockchain();
      $interval(self.fetchBlockchain, 5000);
  
  
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
  
      self.showTransactions = function (blockIndex, blockTimestamp, blockTransactions) {
        data = { blockIndex: blockIndex, blockTimestamp: blockTimestamp, blockTransactions: blockTransactions};
        $mdDialog.show({
          controller: 'showTransactionsCtrl',
          templateUrl: 'app/blockchain_explorer/transactions_popup.html',
          locals: { dataToPass: data },
          parent: angular.element(document.body),
          clickOutsideToClose: true,
        })
      };
  
    }
  })();
  
  