'use strict';

/**
 * @ngdoc overview
 * @name tp7AngularJsApp
 * @description
 * # tp7AngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('tp7AngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pathgather.popeye'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/person', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl',
        controllerAs: 'person'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
