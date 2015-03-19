'use strict';

angular.module('app')
  .directive('room', function () {
    return {
      restrict: 'EA',
      scope: {
        room: '='
      },
      templateUrl: 'directives/room/room.html'
    };
  });
