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
          .state('upload-files', {
            url: '/upload-files',
            templateUrl: 'app/upload_files/upload_files.html',
            controller: 'uploadFilesCtrl',
            controllerAs: 'uploadFiles'
          })
      });

  })();