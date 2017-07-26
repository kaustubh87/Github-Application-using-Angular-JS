var app = angular.module('github-viewer', []);

app.controller("MainController", function($scope, $http){

        $http.get('https://api.github.com/users/kaustubh87')
                .then(function(response){
                     $scope.user = response.data;   
                });

        
});