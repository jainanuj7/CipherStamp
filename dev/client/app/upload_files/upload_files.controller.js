(function () {
  angular
    .module('MyBlockchain')
    .controller('uploadFilesCtrl', uploadFilesCtrl)

  function uploadFilesCtrl($scope, $http) {
    var self = this;
    $scope.duplicate = -1;
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
        .then(uploadRes => {
          $scope.duplicateFiles = uploadRes.data.info;
          console.log(uploadRes.data);
          if (uploadRes.data.note == 'Transaction already exists')
            $scope.duplicate = 1;
          else {
            $http({
              method: 'POST',
              url: '/generateQRCode',
              data: JSON.stringify(uploadRes.data)
            })
            .then(function(qrRes) {
              $scope.duplicate = 0;
            })
          }
        })
    };
  }
})();

