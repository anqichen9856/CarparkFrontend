carpark.controller('carparkCtrl', function ($scope, $http, loginService, $window) {
    if (!loginService.loginDetails.token) {
        alert("Please log in first.")
        $window.location.href = '#/login';
        return;
    }
    $scope.firstName = loginService.loginDetails.firstName;
    $scope.lastName = loginService.loginDetails.lastName;
    $scope.email = loginService.loginDetails.email;
    $scope.contact = loginService.loginDetails.contact;
    $scope.token = loginService.loginDetails.token;

    $scope.sendQuery = function() {
        if (!$scope.validateInput()) return;
        var queryString = $scope.dateTime + ":00";
        $http({
            method: 'GET',
            url: 'http://localhost:5000/users/carpark/' + queryString,
          }).then(function (response) {
                $scope.carparkData = response.data.items[0];
            }, function(response){
                alert(response.data.message);
            })
    }

    $scope.validateInput = function() {
        return $scope.dateTime;
    }
});