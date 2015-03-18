'use strict';

angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/plan', {
        templateUrl: 'views/plan/plan.html',
        controller: 'PlanCtrl',
        controllerAs: 'vm'
      });
  });
