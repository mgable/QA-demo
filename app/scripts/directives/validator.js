'use strict';

/**
 * @ngdoc directive
 * @name marketshareQaDemoApp.directive:validator
 * @description
 * # validator
 */
angular.module('marketshareQaDemoApp')
  .directive('validator', function () {
    return {
		require: 'ngModel',
		restrict: 'A',
		scope: {
			comparisonModel: "&validator",
			errorType: "@"
		},
		link: function postLink(scope, element, attrs, ctrl) {
			
			var validate = function(viewValue) {
					if(!viewValue || !scope.comparisonModel){

						// It's valid because we have nothing to compare against
						ctrl.$setValidity(scope.errorType, true);
						return;
					}

					ctrl.$setValidity(scope.errorType, scope.comparisonModel()(viewValue));
					return viewValue;
				};

			scope.errorType = scope.errorType || "validationError";

			ctrl.$parsers.unshift(validate);
			ctrl.$formatters.push(validate);

			attrs.$observe(scope.errorType, function(){
				// Whenever the comparison model changes we'll re-validate
				return validate(ctrl.$viewValue);
			});

		}
	};
  });
