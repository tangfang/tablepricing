'use strict';

/**
 * @ngdoc overview
 * @name tablepricingApp
 * @description
 * # tablepricingApp
 *
 * Main module of the application.
 */
angular
  .module('tablepricingApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'tablePricing'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
