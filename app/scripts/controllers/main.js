'use strict';

/**
 * @ngdoc function
 * @name tp7AngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp7AngularJsApp
 */
var tpapp = angular.module('tp7AngularJsApp');
tpapp.factory('kami', ['$resource', function($resource) {
  var path ;
  var addPath = function(msg){
    path =$resource('/rest/home/'),{
      charge: {method:'GET'}
     }; 
    console.log('past her');
  };
  return {
    setPath: function(msg){
    addPath(msg);
    },
    getpath: function(){
      return path ;
    }
  };
}]);

tpapp.controller('MainCtrl', function ($scope,kami,$http ) { 
    console.log(" **** ");

    $http.get("/http://localhost:8080/rest/home").then(function (response) {
      $scope.homes = response.data.pokemon_entries;
    });
 

     kami.setPath('home');
   // $scope.homes = kami.getpath();

console.log(" **** "+$scope.homes);


  });
