carpark.controller('carparkCtrl', function ($scope, $http, loginService, $window) {
    if (!loginService.loginDetails.token) {
        //unauthenticated
        alert("Please log in or register first.")
        //redirect to login page
        $window.location.href = '#/login';
        return;
    }
    //get user details and token from login page
    $scope.firstName = loginService.loginDetails.firstName;
    $scope.lastName = loginService.loginDetails.lastName;
    $scope.email = loginService.loginDetails.email;
    $scope.contact = loginService.loginDetails.contact;
    $scope.token = loginService.loginDetails.token;

    $scope.sendQuery = function() {
        //validate query parameters
        if (!$scope.validateInput()) return;
        //complete ":ss" time field with ":00"
        var queryString = $scope.dateTime + ":00";
        $http({
            method: 'GET',
            url: 'http://localhost:5000/users/carpark/' + queryString,
          }).then(function (response) {
                $scope.carparkData = response.data.items[0].carpark_data;
            }, function(response){
                if (response.data.message) {
                    alert(response.data.message);
                }
            })
    }

    $scope.validateInput = function() {
        //query datetime cannot be empty
        return $scope.dateTime;
    }
});