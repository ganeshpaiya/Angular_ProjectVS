
myApp.controller('formcontroler', ['$scope', 'CURDfactory', function ($scope, CURDfactory) {
    $scope.message = "test";
    $scope.onsubnit = function () {
        CURDfactory.Post('/user', {
            name: $scope.user.name,
            email: $scope.user.email,
            phone: $scope.user.phone
            
        }).then(function (res) {
            alert("success");
        }, function (err)
        {
            alert(err);
        });
        console.log($scope.user);
        
    }
    //$scope.languages = [
    //        { username: 'SheoNarayan', address: 'Hyderabad' },
    //        { username: 'Munna', address: 'Bokaro' },
    //        { username: 'Jay', address: 'Aurangabad' },
    //        { username: 'Sreeni', address: 'New York' }

    //];

}]);