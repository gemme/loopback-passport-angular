'use strict';

angular.module('loopbackPassportAngularApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('acceso', {
        url: '/acceso',
        templateUrl: 'app/acceso/acceso.html',
        controller: 'AccesoCtrl'
      });
  });
