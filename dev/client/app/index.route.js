  (function () {
    'use strict';
    angular
      .module('MyBlockchain')
      .config(function ($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise("/transaction-explorer");

        $stateProvider
          .state('transaction-explorer', {
            url: '/transaction-explorer',
            templateUrl: 'app/transaction_explorer/transaction_explorer.html',
            controller: 'transactionExplorerCtrl',
            controllerAs: 'transactionExplorer'
          })
      });

  })();