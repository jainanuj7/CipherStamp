(function () {
  'use strict';
  angular
    .module('MyBlockchain')
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/menu/transaction-explorer");

      $stateProvider
        .state('menu', {
          url: '/menu',
          templateUrl: 'app/menu/menu.html',
          controller: 'MenuCtrl',
          controllerAs: 'menu'
        })
        .state('menu.transaction-explorer', {
          url: '/transaction-explorer',
          templateUrl: 'app/transaction_explorer/transaction_explorer.html',
          controller: 'transactionExplorerCtrl',
          controllerAs: 'transactionExplorer'
        })
        .state('menu.blockchain-explorer', {
          url: '/blockchain-explorer',
          templateUrl: 'app/blockchain_explorer/blockchain_explorer.html',
          controller: 'blockchainExplorerCtrl',
          controllerAs: 'blockchainExplorer'
        })
        .state('menu.upload-files', {
          url: '/upload-files',
          templateUrl: 'app/upload_files/upload_files.html',
          controller: 'uploadFilesCtrl',
          controllerAs: 'uploadFiles'
        })
    });

})();