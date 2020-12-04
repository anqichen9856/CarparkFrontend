carpark.controller('loginCtrl', function($scope, $http, loginService, $window) {
    $scope.signIn = function() {
        if (!$scope.validateInput()) return;
        $http({
            method: 'POST',
            url: 'http://localhost:5000/users/authenticate',
            data: {
                "Email": $scope.email,
                "Password": $scope.password
            }
          }).then(function (response) {
                loginService.loginDetails = response.data;
                alert("You have successfully logged in.")
                $window.location.href = '#/carpark';
            }, function(response){
                alert(response.data.message);
            })
    }

    $scope.validateInput = function() {
        return $scope.email && $scope.password;
    }
});