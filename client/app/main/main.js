'use strict';

angular.module('loopbackPassportAngularApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('acceso', {
        url: '/acceso',
        templateUrl: 'app/main/acceso.html'
      })
      .state('fail', {
        url: '/fail',
        templateUrl: 'app/main/fail.html'
      });
  });
