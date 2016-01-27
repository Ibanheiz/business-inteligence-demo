'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var homeModules = [
  'bi.Home.controllers',
  'bi.Home.factories'
];

module.exports = angular.module('bi.Home', homeModules);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);