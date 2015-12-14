angular.module('atlApp').controller('ArtistsCtrl', function ($scope, $http) {
  $http.get('characters.json')
       .then(function(res){
          $scope.todos = res.data; 
          
        });
});


