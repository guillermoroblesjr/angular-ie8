define(function(require){

  'use strict';

  var amplify = require('amplify.core');

  var pubsub = function( app ){
    app.factory('pubsubService', function(){
      return{
        subscribe:function(name, options){
          amplify.subscribe( name, options, options.fn );
          return options.init;
        },
        publish:function(name, data){
          amplify.publish( name, data );
        }
      };
    });
  };
  return pubsub;
});