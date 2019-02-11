(function () {
  angular
    .module('MyBlockchain')
    .controller('downloadFileCtrl', downloadFileCtrl)

  function downloadFileCtrl($scope, $mdDialog, dataToPass, $http) {
    var self = this;
    $scope.mdDialogData = dataToPass;
    $scope.invalidKey = false;
    console.log($scope.mdDialogData);

    $scope.decryptDownload = function () {
      $http({
        method: 'POST',
        url: '/decrypt-file',
        data: { fileName: $scope.mdDialogData.fileInfo.fileName, key: $scope.secretKey }
      })
        .then(function (decryptRes) {
          //console.log(decryptRes);
          if (decryptRes.data.note == 'Decrypted successfully') {
            $scope.invalidKey = false;
            $http({
              method: 'GET',
              url: '/downloadFile?fileName=' + decryptRes.data.fileName,
              responseType: 'blob'
            }).then(function (downloadRes) {
              //console.log(downloadRes)
              var file = new Blob([downloadRes.data], {
                type: downloadRes.data.type
              });
              var fileURL = URL.createObjectURL(file);
              var a = document.createElement('a');
              a.href = fileURL;
              a.target = '_blank';
              a.download = $scope.mdDialogData.fileInfo.fileName;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              $http({
                method: 'GET',
                url: '/deleteFile?fileName=' + './uploads/decrypt/'+ decryptRes.data.fileName
              })
            })
          }

          else {
            $scope.invalidKey = true;
          }

        })

    }
    $scope.cancel = function () {
      $mdDialog.hide();
    };
  }
})();

