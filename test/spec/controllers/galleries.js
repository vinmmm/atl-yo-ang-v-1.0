'use strict';

describe('Controller: GalleriesCtrl', function () {

  // load the controller's module
  beforeEach(module('atlApp'));

  var GalleriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GalleriesCtrl = $controller('GalleriesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GalleriesCtrl.awesomeThings.length).toBe(3);
  });
});
