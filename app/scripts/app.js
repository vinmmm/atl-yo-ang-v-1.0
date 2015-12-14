'use strict';

/**
 * @ngdoc overview
 * @name atlApp
 * @description
 * # atlApp
 *
 * Main module of the application.
 */
angular.module('atlApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    
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
      .when('/galleries', {
        templateUrl: 'views/galleries.html',
        controller: 'GalleriesCtrl',
        controllerAs: 'galleries'
      })
      .when('/artists', {
        templateUrl: 'views/artists.html',
        controller: 'ArtistsCtrl',
        controllerAs: 'artists'
      })
      .when('/walks', {
        templateUrl: 'views/walks.html',
        controller: 'WalksCtrl',
        controllerAs: 'walks'
      })
      .when('/plunker', {
        templateUrl: 'views/plunker/plunker.html',
        controller: 'MyController',
        controllerAs: 'plunker'
      })
      .when('/mycontroller', {
        templateUrl: 'views/mycontroller.html',
        controller: 'Mycontroller',
        controllerAs: 'mycontroller'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


