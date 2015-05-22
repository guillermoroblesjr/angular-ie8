(function(){

  'use strict';

  var bc = '../../bower_components/';

  require.config({
    paths: {
      app:        './app',
      main:       './main',
      polyfills:  './components/polyfills/polyfills',
      Class:      './components/Class.js/Class',

      // Bower Components
      angular:      bc + 'angular/angular.min',
      lodash:       bc + 'lodash/lodash.min',
      'ua-parser':  bc + 'ua-parser-js/dist/ua-parser.min',
      html5shiv:    bc + 'html5shiv/dist/html5shiv.min',
      respond:      bc + 'Respond/dest/respond.min',
      ie8:          bc + 'ie8-polyfill/index',
      dom4:         bc + 'dom4-polyfill/index',
      'dre-ie8-upfront-fix':        bc + 'document-register-element/build/dre-ie8-upfront-fix',
      'document-register-element':  bc + 'document-register-element/build/document-register-element',
      'es5-shim':   bc + 'es5-shim/es5-shim.min',
      'es5-sham':   bc + 'es5-shim/es5-sham.min'
    },
    shim: {
      jquery:     { exports: 'jQuery' },
      Class:      { exports: 'Class' },
      angular:    { exports: 'angular' },
      'es5-sham': { deps: ['es5-shim'] },
      'es5-shim': { deps: ['document-register-element'] },
      'document-register-element':  { deps: ['dre-ie8-upfront-fix'] },
      'dre-ie8-upfront-fix':        { deps: ['dom4'] },
      'dom4':     { deps: ['ie8'] },
      'ie8':      { deps: ['respond'] },
      'respond':  { deps: ['html5shiv'] }
    },
  });

})();