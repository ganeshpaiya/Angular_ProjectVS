myApp.factory('CURDfactory', ['$rootScope', '$http','$q', function ($rootScope, $http,$q) {
    return {
        Post:function(url,user_data)
        {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: url,
                data: user_data

            }).then(function (res){ 
                deferred.resolve(res);
            },function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }

    }

}]);