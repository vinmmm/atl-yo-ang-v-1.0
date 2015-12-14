'use strict';

describe('Service: AtlApp', function () {

  // load the service's module
  beforeEach(module('atlApp'));

  // instantiate service
  var AtlApp;
  beforeEach(inject(function (_AtlApp_) {
    AtlApp = _AtlApp_;
  }));

  it('should do something', function () {
    expect(!!AtlApp).toBe(true);
  });

});
