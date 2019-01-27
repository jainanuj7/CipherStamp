(function () {
  angular
    .module('MyBlockchain')
    .controller('transactionExplorerCtrl', transactionExplorerCtrl)

  function transactionExplorerCtrl($http, $scope, $interval) {
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
  }
})();

