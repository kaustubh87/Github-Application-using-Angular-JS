var app = angular.module('github-viewer', []);

app.controller("MainController", function($scope){
        $scope.message = "Hello World";

        var person = {
            firstName : "Kvin",
            lastName: "Vin",
            imageUrl: "http://www.kvin.com/2131.jpg"
        };

        $scope.person = person;
});