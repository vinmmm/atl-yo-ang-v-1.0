'use strict';

describe('Controller: ArtistsCtrl', function () {

  // load the controller's module
  beforeEach(module('atlApp'));

  var ArtistsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArtistsCtrl = $controller('ArtistsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArtistsCtrl.awesomeThings.length).toBe(3);
  });
});
