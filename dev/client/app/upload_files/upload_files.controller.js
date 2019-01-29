(function () {
  angular
    .module('MyBlockchain')
    .controller('uploadFilesCtrl', uploadFilesCtrl)

  function uploadFilesCtrl($scope, $http) {
    var self = this;
    $scope.uploadFile = function () {

      var file = $scope.myFile;
      console.log(file)
      var uploadUrl = "/upload";
      var fd = new FormData();
      file.forEach(f1 => {
        fd.append('userUpload', f1);

      });

      $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: { 'Content-Type': undefined }
      })
        .then(data => {
          console.log(data);
        })
    };
  }
})();

