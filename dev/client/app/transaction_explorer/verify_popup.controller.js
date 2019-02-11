(function () {
  angular
    .module('MyBlockchain')
    .controller('verifyFileCtrl', verifyFileCtrl)

  function verifyFileCtrl($scope, $mdDialog, dataToPass, $http) {
    var self = this;
    $scope.mdDialogData = dataToPass;
    $scope.showUploadButton = true;
    console.log($scope.mdDialogData);

    $scope.uploadFile = function () {

      var file = $scope.myFile;
      console.log(file)
      var uploadUrl = "/verify";
      var fd = new FormData();
      file.forEach(f1 => {
        fd.append('userUpload', f1);

      });

      $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: { 'Content-Type': undefined }
      })
        .then(newData => {
          $scope.newData = newData;
          $scope.fileInfoArray = {
            fileHash: [$scope.mdDialogData.fileHash, newData.data.fileHash],
            fileName: [$scope.mdDialogData.fileName, newData.data.fileName],
            fileSize: [$scope.mdDialogData.fileSize, newData.data.fileSize],
          }
          $scope.showUploadButton = false;
          $scope.determineColor();
          $http({
            method: 'GET',
            url: '/deleteFile?fileName=' + './uploads/verify/'+ $scope.newData.data.fileName
          })
        })
    };

    $scope.determineColor = function () {
      if($scope.mdDialogData.fileInfo.fileHash == $scope.newData.data.fileHash)
        $scope.integrity = true;
      else
        $scope.tampered = true;
      if ($scope.mdDialogData.fileInfo.fileHash == $scope.newData.data.fileHash)
        $scope.hashColor = {'color':'green'};
      else
        $scope.hashColor = {'color':'red'};
      if ($scope.mdDialogData.fileInfo.fileName == $scope.newData.data.fileName)
        $scope.nameColor = {'color':'green'}
      else
        $scope.nameColor = {'color':'red'}
      if ($scope.mdDialogData.fileInfo.fileSize == $scope.newData.data.fileSize)
        $scope.sizeColor = {'color':'green'}
      else
        $scope.sizeColor = {'color':'red'}
    }
    $scope.cancel = function () {
      $mdDialog.hide();
    };
  }
})();

