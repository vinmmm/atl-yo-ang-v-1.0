'use strict';

describe('Service: angularExample', function () {

  // load the service's module
  beforeEach(module('atlApp'));

  // instantiate service
  var angularExample;
  beforeEach(inject(function (_angularExample_) {
    angularExample = _angularExample_;
  }));

  it('should do something', function () {
    expect(!!angularExample).toBe(true);
  });

});
