'use strict';

/**
 * @name tablePricing.directive:tablePricing
 * @type {directive}
 * @desc An extended AngularJS Directive pricing-table with form, pagination, and other added features. (supports twitter bootstrap v3).
 */
angular.module('tablePricing', []);
angular.module('tablePricing')
  .directive('tablePricing', function () {
    return {
      templateUrl: 'bower_components/tablepricing/build/tablepricing.html',
      restrict: 'E',
      scope: {
        columns: '=columns',
        store: '=store',
        pagination: '=pagination',
        operation: '=operation'
      }
    };
  });
