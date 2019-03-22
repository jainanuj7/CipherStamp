(function () {
  angular
    .module('MyBlockchain')
    .controller('uploadFilesCtrl', uploadFilesCtrl)

  function uploadFilesCtrl($scope, $http, $geolocation, $q, toastService) {
    var self = this;
    $scope.duplicate = -1;

    var deferred;

    $scope.currentPosition = function () {
      deferred = $q.defer();

      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(currentPosition, handleError);
      } else {
        deferred.reject({ msg: "Browser does not supports HTML5 geolocation" });
      }
      return deferred.promise;
    };

    function currentPosition(position) {
      deferred.resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude });
    }

    function handleError(error) {
        toastService.Notify('Location will not be tracked!')
        $scope.location = { latitude: 360, longitude: 360 };
        $scope.uploadFileProceed();

      deferred.reject({ msg: error.message });
    }

    $scope.uploadFile = function () {
      $scope.currentPosition().then(function (data) {
        console.log(data.latitude, data.longitude);
        $scope.location = { latitude: data.latitude, longitude: data.longitude };
        $scope.uploadFileProceed();
      });
    }

    $scope.uploadFileProceed = function () {

      var file = $scope.myFile;
      console.log(file)
      var uploadUrl = "/upload";
      var fd = new FormData();
      file.forEach(f1 => {
        fd.append('userUpload', f1);

      });

      fd.append('data', angular.toJson($scope.location));
      $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: { 'Content-Type': undefined },

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
      }).then(function (downloadRes) {
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
        toastService.Notify('QR Code download started..')
      })
    }

    $scope.copyNotify = function(parameter) {
      toastService.Notify(parameter + ' copied! Do not share this key with anyone!')
    }
  }
})();

