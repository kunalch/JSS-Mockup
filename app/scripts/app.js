'use strict';

angular.module('JSSMockupApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/index.html', controller: 'MainCtrl'})
      .when('/queue', {templateUrl: 'views/queue.html'})
      .when('/bedmanagement', {templateUrl: 'views/bedmanagement.html'})
      .when('/particularvisit', {templateUrl: 'views/particularvisit.html'})
      .when('/patientdashboard', {templateUrl: 'views/patientdashboard.html'})
      .when('/vitals', {templateUrl: 'views/vitals.html'})
      .otherwise({redirectTo: '/'});
  });


$(function(){
	$(".menu-drag").click(function(){
		alert("aa");
	});
});