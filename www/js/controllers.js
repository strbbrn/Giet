var example = angular.module('starter', ['ionic', 'ngSanitize']);
 
example.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
 
example.controller("ExampleController", function($scope) {
    $scope.myHTML = 'Check out my programming <a href="https://www.thepolyglotdeveloper.com">blog</a> while you are here';
});