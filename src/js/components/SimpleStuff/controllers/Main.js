define(function(require){

  'use strict';

  var angular = require('angular');
  var _ = require('lodash');

  // Add the main controller
  return function(){
    
    angular.module('app').controller('SimpleStuffCtrl', [
      // Controller Dependencies
      '$scope',
      'pubsubService',

      // Constructor function
      function($scope, pubsub/*, Awesome*/){

        // ===[ Properties ]===

        $scope.controllerDefaults = {};
 
        $scope.stuff = [
         'even more awesome stuff',
         'bananas',
         'carrots'
        ];

        $scope.randomNumbers = pubsub.subscribe( 'random-numbers', {
          fn: function( data ){

            var scope = this.scope;

            scope.randomNumbers = data;

            // var valueFn = function( scope ){
            //   return scope.summaries;
            // };
            // var listenerFn = function( oldVal, newVal ){
            //   scope.summaries = newVal;
            //   debugger;
            // };

            // scope.$watch( valueFn, listenerFn );

            // $timeout(function(){
            //   scope.summaries = data;
            //   console.log('scope.summaries: ', scope.summaries);
            // },0);

            scope.$apply();
          },
          scope: $scope,
          init: []
        });
        
        // ===[ Methods ]===


        // Apply defaults when instantiated
        (function($scope){
          // Create Classes, etc.
          // Debugging Only
          var name = 'SimpleStuffCtrl' + '_' + ++window.DEBUGGING.CONTROLLERS_COUNT;
          var obj = {};
          obj[name] = $scope;
          _.merge( window.DEBUGGING.CONTROLLERS, obj );

        })($scope);
      }
    ]);
  };
});


