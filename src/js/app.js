define(function(require){
  
  'use strict';

  ////////////////////////////////////////////////////////////////////////
  // DEBUGGING ONLY!
  ////////////////////////////////////////////////////////////////////////

  window.DEBUGGING = {
    CONTROLLERS: {},
    CONTROLLERS_COUNT: 0
  };

  ////////////////////////////////////////////////////////////////////////
  // DEPENDENCIES
  ////////////////////////////////////////////////////////////////////////

  var _ = require('lodash');
  var angular = require('angular');

  var pubsubService = require('components/publish-subscribe/services/pub-sub');
  var SimpleStuffCtrl = require('components/SimpleStuff/controllers/Main');

  ////////////////////////////////////////////////////////////////////////
  // ANGULAR APP
  ////////////////////////////////////////////////////////////////////////

  // Set up the Angular app dependencies
  var appDependencies = [];

  // Initialize the app
  var app = angular.module('app', appDependencies);

  // Add the configurations
  // app.config([]);

  // Add the controllers
  SimpleStuffCtrl();

  // Add the directives
  // rootEventHandlerDirective();
  // rootEventHandlerTestDirective();

  // Add the services
  pubsubService( app );

  // Manually bind angular due to asyncronously loading
  angular.bootstrap(document, ['app']);

});