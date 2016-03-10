// script.js

// Initialize the angular module
var tbAppMod = angular.module('tbApp', ['ngRoute']);

// Configure the routes
tbAppMod.config(function($routeProvider) {
  $routeProvider

  .when('/', {
  	templateUrl: 'pages/home.html',
  	controller: 'mainController'
  })
  
  .when('/about', {
  	templateUrl: 'pages/about.html',
  	controller: 'aboutController'
  })
  
  .when('/contact', {
  	templateUrl: 'pages/contact.html',
  	controller: 'contactController'
  });
  
  // $locationProvider.html5Mode(true);

})

// Initialize the controller
tbAppMod.controller('mainController', function($scope) {
  $scope.message = 'initial scope message...';
});

tbAppMod.controller('aboutController', function($scope) {
  $scope.message = 'about page message';
});

tbAppMod.controller('contactController', function($scope) {
  $scope.message = 'contact page message';
});