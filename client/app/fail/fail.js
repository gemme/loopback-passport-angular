'use strict';

angular.module('loopbackPassportAngularApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fail', {
        url: '/fail',
        templateUrl: 'app/fail/fail.html',
        controller: 'FailCtrl'
      });
  });
