'use strict';

angular.module('app')
  .controller('PlanCtrl', function () {

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
            client: null
          },
          {
            number: 101,
            state: 'cleaned',
            occupied: true,
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
            occupied: true,
            housemaid: null,
            client: null
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
              name: 'Petrouchka'
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
        id: 'floor2',
        name: 'Étage 2',
        rooms: [
          {
            number: 200
          },
          {
            number: 201
          },
          {
            number: 202
          },
          {
            number: 203
          },
          {
            number: 203
          },
          {
            number: 204
          },
          {
            number: 205
          },
          {
            number: 206
          }
        ]
      },
      {
        id: 'floor3',
        name: 'Étage 3',
        rooms: [
          {
            number: 300
          },
          {
            number: 301
          },
          {
            number: 302
          },
          {
            number: 303
          },
          {
            number: 303
          },
          {
            number: 304
          },
          {
            number: 305
          },
          {
            number: 306
          }
        ]
      }
    ];

    vm.currentFloor = vm.floors[0];

    vm.roomMorph = {
      closeEl: '.close',
      modal: {
        templateUrl: 'calendar.html',
        position: {
          top: '30%',
          left: '20%'
        },
        fade: false
      }
    }

  });
