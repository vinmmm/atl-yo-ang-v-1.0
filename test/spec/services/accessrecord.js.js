'use strict';

describe('Service: accessRecord.js', function () {

  // load the service's module
  beforeEach(module('atlApp'));

  // instantiate service
  var accessRecord.js;
  beforeEach(inject(function (_accessRecord.js_) {
    accessRecord.js = _accessRecord.js_;
  }));

  it('should do something', function () {
    expect(!!accessRecord.js).toBe(true);
  });

});
