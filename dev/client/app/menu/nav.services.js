(function(){
    'use strict';
  
    angular.module('MyBlockchain')
            .service('navService', [
            '$q',
            navService
    ]);
  
    function navService($q){
      var menuItems = [
        {
          name: 'Blockchain Explorer',
          icon: 'dashboard',
          sref: '.blockchain-explorer'
        },
        {
            name: 'Transaction Explroer',
            icon: 'security',
            sref: '.transaction-explorer'
        },
        {
            name: 'Upload Files',
            icon: 'backup',
            sref: '.upload-files'
        },
      ];
  
      return {
        loadMenuItems : function() {
          return $q.when(menuItems);
        }
      };
    }
  
  })();
  