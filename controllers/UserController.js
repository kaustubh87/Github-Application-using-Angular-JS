var app = angular.module('github-viewer', []);

app.controller("MainController", function (
    $scope, github, $interval, $log, $location, $anchorScroll) {

    var success = function (data) {
        $scope.user = data;
        github.getRepos($scope.user)
            .then(onRepos, error);
    };

    var onRepos = function (data) {
        $scope.repos = data;
        /* Anchorscroll to the user details*/
        $location.hash("userDetails");
        $anchorScroll();
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

    var countdownInterval = null;

    var startCountdown = function () {
        countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.search = function () {
        var username = $scope.username;
        //$log.info("Searching for " +username);
        github.getUser(username)
            .then(success, error);
        if (countdownInterval) {
            $interval.cancel(countdownInterval);
            $scope.countdown = null;
        }
    };

    $scope.sortOrderbyLanguage = '-language';
    $scope.username = "kaustubh87";
    $scope.countdown = 5;
    startCountdown();
});