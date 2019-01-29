(function() {
    'use strict';
    angular
        .module('MyBlockchain', [
            'ui.router',
            'ngMaterial',
            'md.data.table',
            'ngclipboard'
        ])
        .directive('fileModel', ['$parse', function ($parse) {
            return {
                restrict: 'A'
                , link: function (scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;
                element.bind('change', function () {
                    var files = [];
                     angular.forEach(element[0].files,function(file){
                       files.push(file);
                    })
                    scope.$apply(function () {
                         modelSetter(scope, files);
                     });
                    });
                }
            };
          }]);
})();
