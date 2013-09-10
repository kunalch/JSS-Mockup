'use strict';

angular.module('JSSMockupApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .when('/admit', {templateUrl: 'views/admit.html'})
      .otherwise({redirectTo: '/'});
  });
