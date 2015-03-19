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
            client: null,
            assignedTo: {
              name: 'Géraldine',
              picture: 'http://api.randomuser.me/portraits/thumb/women/5.jpg'
            }
          },
          {
            number: 101,
            state: 'unavailable',
            occupied: false,
            housemaid: null,
            client: null,
            assignedTo: {
              name: 'Géraldine',
              picture: 'http://api.randomuser.me/portraits/thumb/women/5.jpg'
            }
          },
          {
            number: 102,
            state: 'dirty',
            occupied: true,
            housemaid: null,
            client: null,
            assignedTo: {
              name: 'Géraldine',
              picture: 'http://api.randomuser.me/portraits/thumb/women/5.jpg'
            }
          },
          {
            number: 103,
            state: 'available',
            occupied: true,
            housemaid: null,
            client: null,
            assignedTo: {
              name: 'Géraldine',
              picture: 'http://api.randomuser.me/portraits/thumb/women/5.jpg'
            }
          },
          {
            number: 103,
            state: 'dirty',
            occupied: false,
            client: {
              vip: false
            },
            housemaid: {
              name: 'Agathe',
              picture: 'http://api.randomuser.me/portraits/thumb/women/2.jpg',
              timeElapsed: 255787
            },
            assignedTo: {
              name: 'Géraldine',
              picture: 'http://api.randomuser.me/portraits/thumb/women/5.jpg'
            }
          },
          {
            number: 104,
            state: 'dirty',
            occupied: false,
            housemaid: null,
            client: null,
            assignedTo: null
          },
          {
            number: 105,
            state: 'cleaned',
            occupied: false,
            housemaid: null,
            client: null,
            assignedTo: {
              name: 'Géraldine',
              picture: 'http://api.randomuser.me/portraits/thumb/women/5.jpg'
            }
          },
          {
            number: 106,
            state: 'available',
            occupied: false,
            housemaid: null,
            client: null,
            assignedTo: {
              name: 'Géraldine',
              picture: 'http://api.randomuser.me/portraits/thumb/women/5.jpg'
            }
          },
          {
            number: 107,
            state: 'dirty',
            occupied: false,
            housemaid: {
              name: 'Lisa',
              picture: 'http://api.randomuser.me/portraits/thumb/women/1.jpg',
              timeElapsed: 815987
            },
            client: null,
            assignedTo: {
              name: 'Géraldine',
              picture: 'http://api.randomuser.me/portraits/thumb/women/5.jpg'
            }
          },
          {
            number: 108,
            state: 'dirty',
            occupied: false,
            housemaid: null,
            client: {
              vip: true
            },
            assignedTo: null
          },
          {
            number: 109,
            state: 'cleaned',
            occupied: true,
            housemaid: null,
            client: null,
            assignedTo: {
              name: 'Géraldine',
              picture: 'http://api.randomuser.me/portraits/thumb/women/5.jpg'
            }
          },
          {
            number: 110,
            state: 'available',
            occupied: false,
            housemaid: null,
            client: null,
            assignedTo: {
              name: 'Géraldine',
              picture: 'http://api.randomuser.me/portraits/thumb/women/5.jpg'
            }
          }
        ]
      },
      {
        id: 'floor2',
        name: 'Étage 2',
        rooms: [
          {
            number: 100,
            state: 'available',
            occupied: true,
            housemaid: null,
            client: null
          },
          {
            number: 101,
            state: 'unavailable',
            occupied: false,
            housemaid: null,
            client: null
          },
          {
            number: 102,
            state: 'dirty',
            occupied: true,
            housemaid: null,
            client: null
          },
          {
            number: 103,
            state: 'available',
            occupied: true,
            housemaid: null,
            client: null
          },
          {
            number: 103,
            state: 'dirty',
            occupied: false,
            client: {
              vip: false
            },
            housemaid: {
              name: 'Agathe',
              timeElapsed: 255787
            }
          },
          {
            number: 104,
            state: 'available',
            occupied: false,
            housemaid: null,
            client: null
          },
          {
            number: 105,
            state: 'cleaned',
            occupied: false,
            housemaid: null,
            client: null
          },
          {
            number: 106,
            state: 'available',
            occupied: false,
            housemaid: null,
            client: null
          },
          {
            number: 107,
            state: 'dirty',
            occupied: false,
            housemaid: {
              name: 'Lisa',
              timeElapsed: 815987
            },
            client: null
          },
          {
            number: 108,
            state: 'dirty',
            occupied: false,
            housemaid: null,
            client: {
              vip: true
            }
          },
          {
            number: 109,
            state: 'cleaned',
            occupied: true,
            housemaid: null,
            client: null
          },
          {
            number: 110,
            state: 'available',
            occupied: false,
            housemaid: null,
            client: null
          }
        ]
      },
      {
        id: 'floor3',
        name: 'Étage 3',
        rooms: [
          {
            number: 100,
            state: 'available',
            occupied: true,
            housemaid: null,
            client: null
          },
          {
            number: 101,
            state: 'unavailable',
            occupied: false,
            housemaid: null,
            client: null
          },
          {
            number: 102,
            state: 'dirty',
            occupied: true,
            housemaid: null,
            client: null
          },
          {
            number: 103,
            state: 'available',
            occupied: true,
            housemaid: null,
            client: null
          },
          {
            number: 103,
            state: 'dirty',
            occupied: false,
            client: {
              vip: false
            },
            housemaid: {
              name: 'Agathe',
              timeElapsed: 255787
            }
          },
          {
            number: 104,
            state: 'available',
            occupied: false,
            housemaid: null,
            client: null
          },
          {
            number: 105,
            state: 'cleaned',
            occupied: false,
            housemaid: null,
            client: null
          },
          {
            number: 106,
            state: 'available',
            occupied: false,
            housemaid: null,
            client: null
          },
          {
            number: 107,
            state: 'dirty',
            occupied: false,
            housemaid: {
              name: 'Lisa',
              timeElapsed: 815987
            },
            client: null
          },
          {
            number: 108,
            state: 'dirty',
            occupied: false,
            housemaid: null,
            client: {
              vip: true
            }
          },
          {
            number: 109,
            state: 'cleaned',
            occupied: true,
            housemaid: null,
            client: null
          },
          {
            number: 110,
            state: 'available',
            occupied: false,
            housemaid: null,
            client: null
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
    }

  });
