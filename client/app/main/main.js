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
      .state('accesos', {
        url: '/acceso',
        templateUrl: 'app/acceso/acceso.html'
      })
      .state('fails', {
        url: '/fail',
        templateUrl: 'app/fail/fail.html'
      });
  });
