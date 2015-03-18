'use strict';

angular.module('app')
  .controller('HomeCtrl', function ($interval) {

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

  });
