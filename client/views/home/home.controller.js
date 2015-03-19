'use strict';

angular.module('app')
  .controller('HomeCtrl', function ($interval, $timeout) {

    var vm = this;

    vm.time = Date.now();
    $interval(function () {
      vm.time = Date.now();
    }, 1000);

    vm.options = {
      chart: {
        type: 'pieChart',
        height: 300,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        color: ['#4A89DC', '#8CC152', '#DA4453'],
        showLabels: true,
        transitionDuration: 500,
        labelThreshold: 0.01,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        },
        valueFormat: function(d) {
          return d3.format(',')(d);
        },
        labelType: 'value',
        pieLabelsOutside: false
      }
    };

    vm.data = [
      {
        key: 'Propres',
        y: 48
      },
      {
        key: 'Inspectées',
        y: 56
      },
      {
        key: 'Sales',
        y: 25
      }
    ];

    vm.alerts = [
      {
        message: 'Bar à remplir chambre 120',
        time: 'Il y a 2 h',
        done: false,
        important: false
      },
      {
        message: 'Oreiller manquant chambre 202',
        time: 'Il y a 25 min',
        done: false,
        important: false
      }
    ];

    vm.addDangerAlert = function () {
      $timeout(function () {
        vm.alerts.push({
          message: 'Carole vient de signaler un comportement indésirable près de l\'ascenseur 2 !',
          time: 'A l\'instant',
          done: false,
          important: true
        });
      }, 3000);
    };

    vm.addPlumberAlert = function () {
      $timeout(function () {
        vm.alerts.push({
          message: 'Problème de plomberie chambre 104',
          time: 'À l\'instant',
          done: false,
          important: false
        });
      }, 3000);
    };

    vm.noAlert = function () {
      return _.find(vm.alerts, function (item) {
        return !item.done;
      });
    };

    vm.events = [
      {
        title: 'Nettoyage #201',
        message: 'Alice vient de nettoyer la chambre 201',
        time: Date.now() - 1200000,
        icon: 'bed'
      },
      {
        title: 'Départ #20',
        message: 'Un client vient de partir de la chambre 20',
        time: Date.now() - 2400000,
        icon: 'arrow-left'
      },
      {
        title: 'Nettoyage #58',
        message: 'Jacqueline vient de nettoyer la chambre 58',
        time: Date.now() - 3600000,
        icon: 'bed'
      },
      {
        title: 'Nettoyage #22',
        message: 'Fatima vient de nettoyer la chambre 22',
        time: Date.now() - 5800000,
        icon: 'bed'
      },
      {
        title: 'Nettoyage #147',
        message: 'Franck vient de nettoyer la chambre 147',
        time: Date.now() - 7800000,
        icon: 'bed'
      }
    ];

    vm.addCleanEvent = function () {
      $timeout(function () {
        vm.events.unshift({
          title: 'Nettoyage #104',
          message: 'Carole vient de nettoyer la chambre 104',
          time: Date.now(),
          icon: 'bed'
        });

        vm.data[0].y++;
        vm.data[2].y--;

      }, 3000);
    };

    vm.addClientLeaveEvent = function () {
      $timeout(function () {
        vm.events.unshift({
          title: 'Départ #89',
          message: 'Un client vient de partir de la chambre 89',
          time: Date.now(),
          icon: 'arrow-left'
        });

        vm.data[0].y--;
        vm.data[2].y++;

      }, 3000);
    };

  });
