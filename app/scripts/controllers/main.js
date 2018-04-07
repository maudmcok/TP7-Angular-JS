'use strict';

/**
 * @ngdoc function
 * @name tp7AngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp7AngularJsApp
 */
var tpapp = angular.module('tp7AngularJsApp');

tpapp.factory('kami', ['$resource', function ($resource) {
  var path;
  var addPath = function (msg) {
    path = $resource('/rest/home/');
    console.log('past her');
  };
  return {
    setPath: function (msg) {
      addPath(msg);
    },
    getpath: function () {
      return path;
    }
  };
}]);

tpapp.factory('TransCtrlService', function(){
  var person = null;//the object to hold our data
  var home = null;//the object to hold our data
  return {
    getPerson:function(){
      return person;
    },
    setPerson:function(p){
      person = p;
    },
    getHome:function(){
      return home;
    },
    setHome:function(h){
      home = h;
    }
  };

});


tpapp.controller('MainCtrl', function ($scope, Popeye, kami, $http, $location, TransCtrlService) {

  console.log(" **** ");

  kami.setPath('home');
  $scope.homes = kami.getpath();
  $http.get("rest/home").then(function (response) {
    $scope.homes = response.data;
  });

  $http.get("rest/person").then(function (response) {
    $scope.persons = response.data;
  });

  $scope.count = 0;
  $scope.$on('MyEvent', function () {
    $scope.count++;
  });

  console.log(" **** ");
  $scope.homeAdd;
  $scope.HomeCount = 0;
  $scope.$on('addHome', function () {
    $scope.HomeCount++;
  });

  var heaterObj = {name: "", power: "_"};

  $scope.heaterCount = 0;
  $scope.heaterObjs = new Array();
  $scope.add_Heater = function () {
    $scope.heaterCount++;
    $scope.heaterObjs.push({name: "", power: $scope.heaterCount});
  };

  $scope.electronicAdd;
  $scope.electronicCount = 0;
  $scope.$on('addElectronic', function () {
    $scope.electronicCount++;
  });

  $scope.openHomeAddForm = function (homeId) {
    console.log("modale ok past");
    // Open a modal to show the selected user profile
    var modal = Popeye.openModal({
      templateUrl: "../views/home-form.tmpl.html",
      resolve: {
        user: function ($http) {
          return $http.get("/rest/home/" + homeId);
        }
      }
    });

    // **Show a spinner while modal is resolving dependencies
    $scope.showLoading = true;
    modal.resolved.then(function () {
      $scope.showLoading = false;
    });

    // **Update user after modal is closed
    modal.closed.then(function () {
      $scope.showLoading = false;
      //$scope.updateUser();
    });
  };

  $scope.goToPerson = function (pers) {
    console.log("Go person ");
    console.log(pers);
    TransCtrlService.setPerson(pers);
    $location.path('person');
  };

});



tpapp.controller('PersonCtrl', function ($scope, Popeye, kami, $http, TransCtrlService, $location) {
  console.log("Informations de ");
  $scope.currPerson = TransCtrlService.getPerson();
  console.log($scope.currPerson.firstname);

  $scope.goToHome = function (home) {
    console.log("Go to home");
    console.log(home);
    TransCtrlService.setHome(home);
    $location.path('home');
  };
});

tpapp.controller('HomeCtrl', function ($scope, Popeye, kami, $http, TransCtrlService, $location) {
  console.log("Informations de home");
  $scope.currHome = TransCtrlService.getHome();
  console.log($scope.currHome);


});
