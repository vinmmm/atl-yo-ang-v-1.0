'use strict';

describe('Service: RestangularProvider', function () {

  // instantiate service
  var RestangularProvider,
    init = function () {
      inject(function (_RestangularProvider_) {
        RestangularProvider = _RestangularProvider_;
      });
    };

  // load the service's module
  beforeEach(module('atlApp'));

  it('should do something', function () {
    init();

    expect(!!RestangularProvider).toBe(true);
  });

  it('should be configurable', function () {
    module(function (RestangularProviderProvider) {
      RestangularProviderProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(RestangularProvider.greet()).toEqual('Lorem ipsum');
  });

});
