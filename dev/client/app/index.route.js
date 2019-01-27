  (function () {
    'use strict';
    angular
      .module('MyBlockchain')
      .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/transaction-explorer");

        $stateProvider
          .state('transaction-explorer', {
            url: '/transaction-explorer',
            templateUrl: 'app/transaction_explorer/transaction_explorer.html',
            controller: 'transactionExplorerCtrl',
            controllerAs: 'transactionExplorer'
          })
          .state('blockchain-explorer', {
            url: '/blockchain-explorer',
            templateUrl: 'app/blockchain_explorer/blockchain_explorer.html',
            controller: 'blockchainExplorerCtrl',
            controllerAs: 'blockchainExplorer'
          })
          .state('upload-files', {
            url: '/upload-files',
            templateUrl: 'app/upload_files/upload_files.html',
            controller: 'uploadFilesCtrl',
            controllerAs: 'uploadFiles'
          })
      });

  })();