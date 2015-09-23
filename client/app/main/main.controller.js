'use strict';
(function() {

function MainController($scope, $http,$window) {
  var self = this;
  this.awesomeThings = [];

  $http.get('/api/things').then(function(response) {
    self.awesomeThings = response.data;
  });

  $scope.facebookLogin = function() {
  	$window.location.href = 'http://ec2-52-25-235-109.us-west-2.compute.amazonaws.com:3000/auth/facebook';
  }

}

angular.module('loopbackPassportAngularApp')
  .controller('MainController', MainController);
})();
