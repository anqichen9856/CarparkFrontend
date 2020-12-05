carpark.controller('loginCtrl', function($scope, $http, loginService, $window) {
    $scope.signIn = function() {
        //validate login fields
        if (!$scope.validateInput()) return;
        $http({
            method: 'POST',
            url: 'http://localhost:5000/users/authenticate',
            data: {
                "Email": $scope.email,
                "Password": $scope.password
            }
          }).then(function (response) {
                //store user details and token into loginService (to be used by carpark page)
                loginService.loginDetails = response.data;
                //add Bearer token into HTTP requests' authorization header
                $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
                alert("You have successfully logged in.")
                //redirect to carpark page
                $window.location.href = '#/carpark';
            }, function(response){
                if (response.data.message) {
                    alert(response.data.message);
                }
            })
    }

    $scope.validateInput = function() {
        //email and password cannot be empty
        return $scope.email && $scope.password;
    }
});