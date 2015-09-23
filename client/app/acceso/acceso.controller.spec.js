'use strict';

describe('Controller: AccesoCtrl', function () {

  // load the controller's module
  beforeEach(module('loopbackPassportAngularApp'));

  var AccesoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccesoCtrl = $controller('AccesoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
