'use strict';

angular.module('app')
  .factory('Socket', function () {

    return {
      socket: {
        connect: angular.noop,
        on: angular.noop,
        emit: angular.noop,
        receive: angular.noop
      },
      syncModel: angular.noop,
      unsyncModel: angular.noop
    };

  });
