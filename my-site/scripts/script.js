// script.js

// Initialize the angular module
var tbAppMod = angular.module('tbApp', ['ngRoute']);

// Configure the routes
tbAppMod.config(function($routeProvider) {
// tbAppMod.config(function($routeProvider, $locationProvider) {
  $routeProvider

  .when('/', {
  	templateUrl: 'pages/home.html',
  	controller: 'mainController'
  })
  
  .when('/about', {
  	templateUrl: 'pages/about.html',
  	controller: 'aboutController'
  })
  
  .when('/jsonComparator', {
  	templateUrl: 'pages/jsonComparator.html',
  	controller: 'jsonComparatorController'
  })
  
  .when('/tideChart', {
  	templateUrl: 'pages/tideChart.html',
  	controller: 'tideChartController'
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
  $scope.message = 'Hello, I am tbisiar and this is my portfolio.';
});

tbAppMod.controller('jsonComparatorController', function($scope) {
  $scope.message = 'This is an example for an AngularJS front end.';
});

tbAppMod.controller('tideChartController', function($scope) {
  $scope.message = 'This is an example for a JQuery GUI to display tide at a specified location.';
});

tbAppMod.controller('contactController', function($scope) {
  $scope.message = 'contact page message';
});