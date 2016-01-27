'use strict';

var angular = require('angular');

require('./modules/home/_index');
require('angular-route');
require('angular-cookies');
require('angular-aria');
require('angular-animate');
require('angular-sanitize');
require('angular-messages');
require('angular-material');

var requires = [
  'bi.Home',
  'ngRoute',
  'ngAria',
  'ngAnimate',
  'ngSanitize',
  'ngCookies',
  'ngMessages',
  'ngMaterial'
];

angular.module('bi', requires);
angular.module('bi').config(require('./systemConfig'));
angular.module('bi').run(require('./systemRun'));
angular.module('bi').constant('SystemUriConfig', require('./systemConstants'));
