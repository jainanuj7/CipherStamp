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
            $scope.secretKey = uploadRes.data.key;
            $http({
              method: 'POST',
              url: '/generateQRCode',
              data: JSON.stringify(uploadRes.data)
            })
              .then(function (qrRes) {
                $scope.duplicate = 0;
                $scope.newBlockHash = uploadRes.data.blockHash;
              })
          }
        })
    };

    $scope.downloadQRCode = function () {
      $http({
        method: 'GET',
        url: '/downloadQRcode?blockHash=' + $scope.newBlockHash,
        headers: {
          'Content-Type': 'image/png',
        },
        responseType: 'blob' 
      }).then(function(downloadRes) {
        var file = new Blob([downloadRes.data], {
          type: 'image/png'
      });
      var fileURL = URL.createObjectURL(file);
      var a = document.createElement('a');
      a.href = fileURL;
      a.target = '_blank';
      a.download = $scope.newBlockHash + '.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      })
    }
  }
})();

