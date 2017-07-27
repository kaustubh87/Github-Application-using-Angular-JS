var app = angular.module('github-viewer', []);

app.controller("MainController", function ($scope, $http, $interval) {

    var success = function (response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
            .then(onRepos, error);
    };

    var onRepos = function (response) {
        $scope.repos = response.data;
    };

    var error = function (error) {
        $scope.error = "Could not fetch the user";
    };

    var decrementCountdown = function () {
        $scope.countdown -= 1;
        if ($scope.countdown < 1) {
            $scope.search($scope.username);
        }
    };

    var startCountdown = function () {
        $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.search = function () {
        var username = $scope.username;
        $http.get('https://api.github.com/users/' + username)
            .then(success, error);
    };

    $scope.sortOrderbyLanguage = '-language';
    $scope.username = "kaustubh87";
    $scope.countdown = 5;
    startCountdown();



});