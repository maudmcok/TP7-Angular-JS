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
      path =$resource('/rest/home/');
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

tpapp.controller('MainCtrl', function ($scope,Popeye,kami,$http ) {

    console.log(" **** ");

    kami.setPath('home');
    $scope.homes = kami.getpath();
    $http.get("rest/home").then(function (response) {
      $scope.homes = response.data;
    });

    $http.get("rest/person").then(function (response) {
      $scope.persons = response.data;
    });

    console.log(" **** "+$scope.homes);

    $scope.openHomeAddForm = function(homeId) {
console.log("modale ok past")
      // Open a modal to show the selected user profile
      var modal = Popeye.openModal({
        templateUrl: "../views/home-form.tmpl.html",
        resolve: {
          user: function($http) {
            return $http.get("/rest/home/" + homeId);
          }
        }
      });

      // Show a spinner while modal is resolving dependencies
      $scope.showLoading = true;
      modal.resolved.then(function() {
        $scope.showLoading = false;
      });

      // Update user after modal is closed
      modal.closed.then(function() {
        $scope.showLoading = false;
        //$scope.updateUser();
      });
    };

  });

