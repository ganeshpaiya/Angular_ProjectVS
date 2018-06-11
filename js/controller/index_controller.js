
myApp.controller('indexcontroler', ['$scope', function ($scope) {
    $scope.message = "test";
    $scope.Postdata = function () {

        alert($scope.name);
    }
    $scope.languages = [
            { username: 'SheoNarayan', address: 'Hyderabad' },
            { username: 'Munna', address: 'Bokaro' },
            { username: 'Jay', address: 'Aurangabad' },
            { username: 'Sreeni', address: 'New York' }

    ];

}]);