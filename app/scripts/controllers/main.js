'use strict';

/**
 * @ngdoc function
 * @name marketshareQaDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marketshareQaDemoApp
 */
angular.module('marketshareQaDemoApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.templates = [{title: "one"}, {title: "two"}, {title: "three"}];

    $scope.isTemplateTitleUnique = function(scenario) {
        return ! _.findWhere($scope.templates, {title: scenario});
    };
  });
