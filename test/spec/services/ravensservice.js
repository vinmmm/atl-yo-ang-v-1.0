'use strict';

describe('Service: ravensService', function () {

  // load the service's module
  beforeEach(module('atlApp'));

  // instantiate service
  var ravensService;
  beforeEach(inject(function (_ravensService_) {
    ravensService = _ravensService_;
  }));

  it('should do something', function () {
    expect(!!ravensService).toBe(true);
  });

});
