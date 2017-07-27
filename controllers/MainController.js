var app = angular.module('github-viewer', []);

app.controller("MainController", function($scope, $http){

        var success = function(response){
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, error);
        };

        var onRepos = function(response){
            $scope.repos = response.data;
        };

        var error = function(error){
             $scope.error = "Could not fetch the user";
        };


        $scope.search = function(){
        var username = $scope.username;
        $http.get('https://api.github.com/users/'+username)
                .then(success, error);
        };

        $scope.sortOrderbyLanguage = '-language';
        
});