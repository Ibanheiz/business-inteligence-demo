'use strict';

var factoriesModule = require('./_index');

/**
 * @ngInject
 */
function systemUri(SystemUriConfig) {
  return {
    getHome: function () {
      return SystemUriConfig.getHome;
    },
    get404: function () {
      return SystemUriConfig.get404;
    }
  };
}

factoriesModule.factory('systemUri', systemUri);
