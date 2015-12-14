'use strict';

describe('Service: recordaccess', function () {

  // load the service's module
  beforeEach(module('atlApp'));

  // instantiate service
  var recordaccess;
  beforeEach(inject(function (_recordaccess_) {
    recordaccess = _recordaccess_;
  }));

  it('should do something', function () {
    expect(!!recordaccess).toBe(true);
  });

});
