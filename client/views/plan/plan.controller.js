'use strict';

angular.module('app')
  .controller('PlanCtrl', function ($scope, $interval) {

    var vm = this;

    vm.floors = [
      {
        id: 'floor1',
        name: 'Étage 1',
        rooms: [
          {
            number: 100,
            state: 'available',
            occupied: true,
            housemaid: null,
            specificity: {
              vip: true,
              typeOfLeave: 'départ',
              type: 'single'
            }
          },
          {
            number: 101,
            state: 'unavailable',
            occupied: false,
            housemaid: null,
            specificity: {
              vip: true,
              typeOfLeave: 'départ',
              type: 'twin'
            }
          },
          {
            number: 102,
            state: 'dirty',
            occupied: true,
            housemaid: null,
            specificity: {
              vip: true,
              typeOfLeave: 'départ',
              type: 'single'
            }
          },
          {
            number: 103,
            state: 'available',
            occupied: true,
            housemaid: null,
            specificity: {
              vip: true,
              typeOfLeave: 'départ',
              type: 'twin'
            }
          },
          {
            number: 104,
            state: 'dirty',
            occupied: false,
            specificity: {
              vip: true,
              typeOfLeave: 'recouche',
              type: 'double'
            },
            housemaid: null
          },
          {
            number: 105,
            state: 'dirty',
            occupied: false,
            housemaid: null,
            specificity: {
              vip: true,
              typeOfLeave: 'départ',
              type: 'double'
            }
          },
          {
            number: 106,
            state: 'cleaned',
            occupied: false,
            housemaid: null,
            specificity: {
              vip: true,
              typeOfLeave: 'départ',
              type: 'single'
            }
          },
          {
            number: 107,
            state: 'available',
            occupied: false,
            housemaid: null,
            specificity: {
              vip: true,
              typeOfLeave: 'départ',
              type: 'double'
            }
          },
          {
            number: 108,
            state: 'dirty',
            occupied: false,
            housemaid: {
              name: 'Lisa',
              picture: 'http://api.randomuser.me/portraits/thumb/women/1.jpg',
              timeElapsed: 815987
            },
            specificity: {
              vip: true,
              typeOfLeave: 'recouche',
              type: 'twin'
            }
          },
          {
            number: 109,
            state: 'dirty',
            occupied: false,
            housemaid: null,
            specificity: {
              vip: true,
              typeOfLeave: 'départ',
              type: 'twin'
            }
          },
          {
            number: 110,
            state: 'cleaned',
            occupied: true,
            housemaid: null,
            specificity: {
              vip: true,
              typeOfLeave: 'recouche',
              type: 'double'
            }
          }
        ]
      },
      {
        id: 'floor2',
        name: 'Étage 2',
        rooms: [
          {
            number: 200,
            state: 'available',
            occupied: true,
            housemaid: null,
            specificity: null
          },
          {
            number: 201,
            state: 'unavailable',
            occupied: false,
            housemaid: null,
            specificity: null
          },
          {
            number: 202,
            state: 'dirty',
            occupied: true,
            housemaid: null,
            specificity: null
          },
          {
            number: 203,
            state: 'available',
            occupied: true,
            housemaid: null,
            specificity: null
          },
          {
            number: 204,
            state: 'available',
            occupied: false,
            housemaid: null,
            specificity: null
          },
          {
            number: 205,
            state: 'cleaned',
            occupied: false,
            housemaid: null,
            specificity: null
          },
          {
            number: 206,
            state: 'available',
            occupied: false,
            housemaid: null,
            specificity: null
          },
          {
            number: 207,
            state: 'dirty',
            occupied: false,
            housemaid: {
              name: 'Lisa',
              timeElapsed: 815987
            },
            specificity: null
          },
          {
            number: 208,
            state: 'dirty',
            occupied: false,
            housemaid: null,
            specificity: {
              vip: true
            }
          },
          {
            number: 209,
            state: 'cleaned',
            occupied: true,
            housemaid: null,
            specificity: null
          },
          {
            number: 210,
            state: 'available',
            occupied: false,
            housemaid: null,
            specificity: null
          }
        ]
      },
      {
        id: 'floor3',
        name: 'Étage 3',
        rooms: [
          {
            number: 300,
            state: 'available',
            occupied: true,
            housemaid: null,
            specificity: null
          },
          {
            number: 301,
            state: 'unavailable',
            occupied: false,
            housemaid: null,
            specificity: null
          },
          {
            number: 302,
            state: 'dirty',
            occupied: true,
            housemaid: null,
            specificity: null
          },
          {
            number: 303,
            state: 'available',
            occupied: true,
            housemaid: null,
            specificity: null
          },
          {
            number: 304,
            state: 'available',
            occupied: false,
            housemaid: null,
            specificity: null
          },
          {
            number: 305,
            state: 'cleaned',
            occupied: false,
            housemaid: null,
            specificity: null
          },
          {
            number: 306,
            state: 'available',
            occupied: false,
            housemaid: null,
            specificity: null
          },
          {
            number: 307,
            state: 'dirty',
            occupied: false,
            housemaid: {
              name: 'Lisa',
              timeElapsed: 815987
            },
            specificity: null
          },
          {
            number: 308,
            state: 'dirty',
            occupied: false,
            housemaid: null,
            specificity: {
              vip: true
            }
          },
          {
            number: 309,
            state: 'cleaned',
            occupied: true,
            housemaid: null,
            specificity: null
          },
          {
            number: 310,
            state: 'available',
            occupied: false,
            housemaid: null,
            specificity: null
          }
        ]
      }
    ];

    vm.currentFloor = vm.floors[0];

    $scope.roomMorphAvailable = {
      closeEl: '.close',
      modal: {
        templateUrl: 'views/plan/room-available.html'
      }
    };

    $scope.roomMorphUnavailable = {
      closeEl: '.close',
      modal: {
        templateUrl: 'views/plan/room-unavailable.html'
      }
    };

    $scope.roomMorphDirty = {
      closeEl: '.close',
      modal: {
        templateUrl: 'views/plan/room-dirty.html'
      }
    };

    $scope.roomMorphCleaned = {
      closeEl: '.close',
      modal: {
        templateUrl: 'views/plan/room-cleaned.html'
      }
    };

    $interval(function () {
      vm.floors[0].rooms[8].housemaid.timeElapsed += 1000;
      vm.floors[0].rooms[4].housemaid.timeElapsed += 1000;
    }, 1000);


    vm.filter = {};

    vm.setFilter = function (state) {

      var t, els;

      if (vm.filter.hasOwnProperty(state)) {

        els = $('.room.' + state);
        t = new TimelineMax();
        t.to(els, .2, { width: 150, margin: 10 }).to(els, .2, { scale: 1 });

        delete vm.filter[state];
      } else {

        els = $('.room.' + state);
        t = new TimelineMax();
        t.to(els, .2, { scale: 0 }).to(els, .2, { width: 0, margin: 0 });

        vm.filter[state] = true;
      }
      if (state === 'all') {

        els = $('.room');
        t = new TimelineMax();

        t.to(els, .2, { width: 150, margin: 10 }).to(els, .2, { scale: 1 });
        vm.filter = {};
      }

    };

    vm.displayRoom = function (state) {
      if (_.isEmpty(vm.filter)) {
        return true;
      }
      return !!(vm.filter.hasOwnProperty(state) && vm.filter[state]);
    };

    vm.checkFilter = function (state) {
      if (_.isEmpty(vm.filter) && state === 'all') {
        return true;
      }
      if (_.isEmpty(vm.filter)) {
        return false;
      }
      return !!vm.filter.hasOwnProperty(state);
    };

    vm.changeCurrentFloor = function (index) {
      vm.currentFloor = vm.floors[index];
    };

    vm.housemaids = [
      {
        name: 'Lisa',
        picture: '',
        rooms : [100, 101, 102, 103],
        data: [
          {
            values: [{ x: 1, y: 12}, { x: 2, y: 20 }, { x: 3, y: 10 }, { x: 4, y: 21 }, { x: 5, y: 14 }, { x: 6, y: 15 }],
            key: 'Productivité'
          }
        ]
      },
      {
        name: 'Zoé',
        picture: '',
        rooms : [200, 203, 207],
        data: [
          {
            values: [{ x: 1, y: 28}, { x: 2, y: 23 }, { x: 3, y: 15 }, { x: 4, y: 24 }, { x: 5, y: 20 }, { x: 6, y: 20 }],
            key: 'Productivité'
          }
        ]
      },
      {
        name: 'Carole',
        picture: '',
        rooms : [305, 306, 302],
        data: [
          {
            values: [{ x: 1, y: 17}, { x: 2, y: 12 }, { x: 3, y: 18 }, { x: 4, y: 17 }, { x: 5, y: 14 }, { x: 6, y: 23 }],
            key: 'Productivité'
          }
        ]
      },
      {
        name: 'Fatima',
        picture: '',
        rooms : [204, 208, 104],
        data: [
          {
            values: [{ x: 1, y: 28}, { x: 2, y: 23 }, { x: 3, y: 15 }, { x: 4, y: 24 }, { x: 5, y: 20 }, { x: 6, y: 20 }],
            key: 'Productivité'
          }
        ]
      },
      {
        name: 'Franck',
        picture: '',
        rooms : [106, 104],
        data: [
          {
            values: [{ x: 1, y: 15}, { x: 2, y: 12 }, { x: 3, y: 10 }, { x: 4, y: 12 }, { x: 5, y: 14 }, { x: 6, y: 15 }],
            key: 'Productivité'
          }
        ]
      },
      {
        name: 'Rajid',
        picture: '',
        rooms : [109, 102, 108, 103],
        data: [
          {
            values: [{ x: 1, y: 15}, { x: 2, y: 12 }, { x: 3, y: 10 }, { x: 4, y: 12 }, { x: 5, y: 14 }, { x: 6, y: 15 }],
            key: 'Productivité'
          }
        ]
      }
    ];

    vm.addRoom = function (index) {
      vm.housemaids[index].rooms.push(vm.housemaids[index].add);
      vm.housemaids[index].add = null;
    };

    vm.housemaidSelected = null;

    vm.options = {
      chart: {
        type: 'lineChart',
        height: 300,
        x: function (d){ return d.x; },
        y: function (d){ return d.y; },
        interpolate: 'monotone',
        forceY: [0, 30]
      }
    };

    vm.startClean = function () {
      vm.floors[0].rooms[4].housemaid = {
        name: 'Carole',
        picture: 'http://api.randomuser.me/portraits/thumb/women/55.jpg',
        timeElapsed: 0
      }
    }

  });
