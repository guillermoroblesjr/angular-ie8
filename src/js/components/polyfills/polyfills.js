define(function(require){

    'use strict';

    var UAParser = require('ua-parser');

    var init = function(){

      /**
       * Protect window.console method calls, e.g. console is not defined on IE
       * unless dev tools are open, and IE doesn't define console.debug
       * 
       * Chrome 41.0.2272.118: debug,error,info,log,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear
       * Firefox 37.0.1: log,info,warn,error,exception,debug,table,trace,dir,group,groupCollapsed,groupEnd,time,timeEnd,profile,profileEnd,assert,count
       * Internet Explorer 11: select,log,info,warn,error,debug,assert,time,timeEnd,timeStamp,group,groupCollapsed,groupEnd,trace,clear,dir,dirxml,count,countReset,cd
       * Safari 6.2.4: debug,error,log,info,warn,clear,dir,dirxml,table,trace,assert,count,profile,profileEnd,time,timeEnd,timeStamp,group,groupCollapsed,groupEnd
       * Opera 28.0.1750.48: debug,error,info,log,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear
       */
      (function() {
        // Union of Chrome, Firefox, IE, Opera, and Safari console methods
        var methods = ["assert", "assert", "cd", "clear", "count", "countReset",
          "debug", "dir", "dirxml", "dirxml", "dirxml", "error", "error", "exception",
          "group", "group", "groupCollapsed", "groupCollapsed", "groupEnd", "info",
          "info", "log", "log", "markTimeline", "profile", "profileEnd", "profileEnd",
          "select", "table", "table", "time", "time", "timeEnd", "timeEnd", "timeEnd",
          "timeEnd", "timeEnd", "timeStamp", "timeline", "timelineEnd", "trace",
          "trace", "trace", "trace", "trace", "warn"];
        var length = methods.length;
        var console = (window.console = window.console || {});
        var method;
        var noop = function() {};
        while (length--) {
          method = methods[length];
          // define undefined methods as noops to prevent errors
          if (!console[method])
            console[method] = noop;
        }
      })();

      var parser = new UAParser();
      var browser = parser.getBrowser();

      console.log( 'browser: ' + browser.name + '| version: ' + browser.major );

      var getPolyfills = function( parser, browser ){
        /*
         * IE8 & IE9
        */
        var setTimeOutPolyfill = function(){(function(f){window.setTimeout=f(window.setTimeout);window.setInterval=f(window.setInterval)})(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c.apply(this,a)},t)}});};    
        var ie8requireConfigChanges = function(){
            requirejs.config({
              shim: {
                Class: { exports: 'Class', deps: ['es5-shim'] },
              }
            });
        };
        var isIE8 = (browser.name === 'IE' && browser.major === '8') ? true : false;
        var isIE9 = (browser.name === 'IE' && browser.major === '9') ? true : false;

        if ( isIE8 === true || isIE9 == true) {
            ie8requireConfigChanges();
            require('html5shiv');
            require('respond');
            setTimeOutPolyfill();
            require('ie8');
            require('dom4');
            require('dre-ie8-upfront-fix');
            require('document-register-element');
            require('es5-shim');
            require('es5-sham');
        };

      };

      getPolyfills( parser, browser );
    };

    init();
});