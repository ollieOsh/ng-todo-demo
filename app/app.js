"use strict";

const app = angular.module('TodoApp', ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/task-list.html',
		controller: 'TaskListCtrl'
	})
	.when('/items/:taskId', {
		templateUrl: "partials/task-detail.html",
		controller: 'TaskDetailCtrl'
	})
	.when('/items/:taskId/edit', {
		templateUrl: "partials/task-form.html",
		controller: 'EditTaskCtrl'
	})
	.otherwise('/');
});

app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };

    firebase.initializeApp(authConfig);
});