'use strict';

describe('Controller: WalksCtrl', function () {

  // load the controller's module
  beforeEach(module('atlApp'));

  var WalksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WalksCtrl = $controller('WalksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WalksCtrl.awesomeThings.length).toBe(3);
  });
});
