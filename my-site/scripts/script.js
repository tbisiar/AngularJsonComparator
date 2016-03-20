// script.js

// Let's do this in strict mode to encourage good habits :)
"use strict";

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
  $scope.message = 'Hello, I am tbisiar and this is my portfolio.';
});

tbAppMod.controller('aboutController', function($scope) {
  $scope.message = 'Let me tell you a little about myself';
});

tbAppMod.controller('jsonComparatorController', function($scope) {
  $scope.message = 'An example for an AngularJS front end.';
});

tbAppMod.controller('tideChartController', function($scope) {
  $scope.message = 'An example for a JQuery GUI to display tide at a specified location.';
  // tideChart();
  // tideChartD3( [-1.0614901368607994, 0.9524224113146654, -0.13286661056684568,0.2534212750891985] );
  // tideChartD3( [-0.91299251927959, 1.0049121683629985,-0.27793326004093283, 0.07051110184971858,-0.9679999715685375, 1.1495536133887616] );
  tideChartD3( [ {x: "00:28", y: 0.8}, {x: "06:51", y: 3.1}, {x: "12:57", y: 0.9}, {x: "19:19", y: 3.0} ] );
});

tbAppMod.controller('contactController', function($scope) {
  $scope.message = 'Contact ME!';
});
