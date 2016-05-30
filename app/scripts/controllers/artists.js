angular.module('atlApp').controller('ArtistsCtrl', function ($scope, $http) {
  $http.get('artists.json')
       .then(function(res){
          $scope.artists = res.data; 
          
        });
});


