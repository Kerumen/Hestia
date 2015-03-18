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
        key: "Propres",
        y: 48
      },
      {
        key: "Inspectées",
        y: 56
      },
      {
        key: "Sales",
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
        message: 'Oreiller manquant chambre 68',
        time: 'Il y a 25 min',
        done: false,
        important: false
      },
      {
        message: 'Toilette bouché chambre 308',
        time: 'Il y a 4 min',
        done: false,
        important: false
      }
    ];

    vm.addAlert = function () {
      $timeout(function () {
        vm.alerts.push({
          message: 'Comportement indésirable signalé chambre 68 !',
          time: 'A l\'instant',
          done: false,
          important: true
        });
      }, 3000);
    };

    vm.noAlert = function () {
      return _.find(vm.alerts, function (item) {
        return !item.done;
      })
    };

    vm.events = [
      {
        title: 'Nettoyage #201',
        message: 'Alice vient de nettoyer la chambre 201',
        time: '17h30'
      },
      {
        title: 'Nettoyage #58',
        message: 'Jacqueline vient de nettoyer la chambre 58',
        time: '17h15'
      },
      {
        title: 'Nettoyage #22',
        message: 'Fatima vient de nettoyer la chambre 22',
        time: '16h08'
      },
      {
        title: 'Nettoyage #147',
        message: 'Franck vient de nettoyer la chambre 147',
        time: '15h22'
      }
    ];

    vm.addEvent = function () {
      $timeout(function () {
        vm.events.unshift({
          title: 'Nettoyage #42',
          message: 'Alicia vient de nettoyer la chambre 42',
          time: '18h04'
        });
      }, 3000);
    };

  });
