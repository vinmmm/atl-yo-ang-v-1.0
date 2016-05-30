'use strict';

describe('Service: artistsService', function () {

  // load the service's module
  beforeEach(module('atlApp'));

  // instantiate service
  var artistsService;
  beforeEach(inject(function (_artistsService_) {
    artistsService = _artistsService_;
  }));

  it('should do something', function () {
    expect(!!artistsService).toBe(true);
  });

});
