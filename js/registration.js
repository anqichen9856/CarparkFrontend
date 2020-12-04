carpark.controller('registrationCtrl', function($scope, $http) {
    $scope.signUp = function() {
        if (!$scope.validateInput()) return;
        if (!$scope.contact) {
            $scope.contact = null;
        }
        $http({
            method: 'POST',
            url: 'http://localhost:5000/users/register',
            data: {
                "FirstName": $scope.firstname,
                "LastName": $scope.lastname,
                "Email": $scope.email,
                "Contact": $scope.contact,
                "Password": $scope.password
            }
          }).then(function (response) {
              alert("User has been succesfully registered.");
            })
    }

    $scope.validateInput = function() {
        var required = $scope.firstname && $scope.lastname && $scope.email && $scope.password && $scope.confirmed; 
        if (required && $scope.password != $scope.confirmed) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }
});