var app = angular.module('github-viewer', []);

app.controller("MainController", function($scope, $http){

        $http.get('https://api.github.com/users/kausubh87')
                .then(function(response){
                     $scope.user = response.data;   
                }, function(error){
                    if(error){
                        $scope.error = "Could not fetch the user";
                    }
                });

        
});