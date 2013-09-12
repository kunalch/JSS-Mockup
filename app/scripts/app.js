'use strict';

angular.module('JSSMockupApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/admit.html', controller: 'MainCtrl'})
      .when('/queue', {templateUrl: 'views/queue.html'})
      .otherwise({redirectTo: '/'});
  });
