'use strict';

/**
 * @ngdoc overview
 * @name atlApp
 * @description
 * # atlApp
 *
 * Main module of the application.
 */

angular.module('project', ['restangular', 'ngRoute']).
  config(function($routeProvider, RestangularProvider) {
    $routeProvider.
      when('/', {
        controller:ListCtrl, 
        templateUrl:'list.html'
      })
       .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project'
      })
      .when('/main', {
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
      .when('/edit/:projectId', {
        controller:EditCtrl, 
        templateUrl:'detail.html',
        resolve: {
          project: function(Restangular, $route){
            return Restangular.one('projects', $route.current.params.projectId).get();
          }
        }
      }).
      when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
      
      RestangularProvider.setBaseUrl('https://api.mongolab.com/api/1/databases/angularjs/collections');
      RestangularProvider.setDefaultRequestParams({ apiKey: '4f847ad3e4b08a2eed5f3b54' })
      RestangularProvider.setRestangularFields({
        id: '_id.$oid'
      });
      
      RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
        
        if (operation === 'put') {
          elem._id = undefined;
          return elem;
        }
        return elem;
      })
  });


function ListCtrl($scope, Restangular) {
   $scope.projects = Restangular.all("projects").getList().$object;
}


function CreateCtrl($scope, $location, Restangular) {
  $scope.save = function() {
    Restangular.all('projects').post($scope.project).then(function(project) {
      $location.path('/list');
    });
  }
}

function EditCtrl($scope, $location, Restangular, project) {
  var original = project;
  $scope.project = Restangular.copy(original);
  

  $scope.isClean = function() {
    return angular.equals(original, $scope.project);
  }

  $scope.destroy = function() {
    original.remove().then(function() {
      $location.path('/list');
    });
  };

  $scope.save = function() {
    $scope.project.put().then(function() {
      $location.path('/');
    });
  };
} 

