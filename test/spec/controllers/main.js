'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('marketshareQaDemoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should test for a unique name', function () {
    expect(scope.isTemplateTitleUnique("one")).toBe(false);
    expect(scope.isTemplateTitleUnique("five")).toBe(true);
  });
});