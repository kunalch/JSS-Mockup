'use strict';

angular.module('JSSMockupApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/admit.html', controller: 'MainCtrl'})
      .when('/queue', {templateUrl: 'views/queue.html'})
      .when('/bedmanagement', {templateUrl: 'views/bedmanagement.html'})
      .when('/patientdashboard', {templateUrl: 'views/patientdashboard.html'})
      .otherwise({redirectTo: '/'});
  });


$(function(){
	$(".menu-drag").click(function(){
		alert("aa");
	});
});