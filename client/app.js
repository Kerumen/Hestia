'use strict';

angular.module('app', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'btford.socket-io',
  'nvd3',
  'ui.bootstrap',
  'ngMorph'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');

  })
  .factory('authInterceptor',
  function ($rootScope, $q, $cookieStore, $location) {
    return {

      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      responseError: function (response) {
        if (response.status === 401) {
          $location.path('/login');
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }

    };
  })

  .run(function ($rootScope, Auth) {

    $rootScope.Auth = Auth;

  })
  .controller('GeneralCtrl', function ($scope, $location) {

    $scope.isActive = function (viewLocation, position) {
      var tokens = $location.path().split('/');
      if (position > tokens.length && viewLocation === '') {
        return true;
      }
      return tokens[position] === viewLocation;
    };

  });
