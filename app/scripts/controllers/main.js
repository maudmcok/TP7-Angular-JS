'use strict';

/**
 * @ngdoc function
 * @name tp7AngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp7AngularJsApp
 */
angular.module('tp7AngularJsApp')
  .controller('MainCtrl', function ($scope, $http) { 
    $scope.homes = [];
    $scope.persons = [];
    $scope.heater = [];
    $scope.electronis = [];
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
