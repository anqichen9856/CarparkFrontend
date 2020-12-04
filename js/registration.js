carpark.controller('registrationCtrl', function ($scope, $http) {
    $scope.signUp = function () {
        if (!$scope.validateInput()) return;
        if (!$scope.contact) {
            $scope.contact = null;
        }
        $http({
            method: 'POST',
            url: 'http://localhost:5000/users/register',
            data: {
                "FirstName": $scope.firstName,
                "LastName": $scope.lastName,
                "Email": $scope.email,
                "Contact": $scope.contact,
                "Password": $scope.password
            }
        }).then(function (response) {
            alert("User has been succesfully registered.");
        }, function (response) {
            if (response.data.message) {
                alert(response.data.message);
            }
        })
    }

    $scope.validateInput = function () {
        var required = $scope.firstName && $scope.lastName && $scope.email && $scope.password && $scope.confirmed;
        if (!required) {
            return false;
        } else if ($scope.password != $scope.confirmed) {
            alert("Passwords do not match.");
            return false;
        } else {
            return true;
        }
    }
});