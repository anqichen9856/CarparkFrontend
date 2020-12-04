carpark.controller('carparkCtrl', function($scope, $http, loginService, $window) {
     if (!loginService.loginDetails.token) {
        alert("Please log in first.")
        $window.location.href = '#/login';
     }
    
    // $scope.signIn = function() {
    //     if (!$scope.validateInput()) return;
    //     $http({
    //         method: 'POST',
    //         url: 'http://localhost:5000/users/authenticate',
    //         data: {
    //             "Email": $scope.email,
    //             "Password": $scope.password
    //         }
    //       }).then(function (response) {
    //             console.log(response.data.token);
    //         }, function(response){
    //             alert(response.data.message);
    //         })
    // }

    // $scope.validateInput = function() {
    //     return $scope.email && $scope.password;
    // }
});