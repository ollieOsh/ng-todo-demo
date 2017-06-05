"use strict";

const app = angular.module('TodoApp', ["ngRoute"]);

let isAuth = (AuthFactory, $location) => new Promise ((resolve, reject) => {
	AuthFactory.isAuthenticated()
	.then((userExists) => {
		if(userExists) {
			console.log("Authenticated, yay!");
			resolve();
		}else {
			console.log("Authentication REJECTED");
			reject();
			$location.path('/');
		}
	});
});

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/login', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/logout', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/task-list', {
		templateUrl: 'partials/task-list.html',
		controller: 'TaskListCtrl',
		resolve: {isAuth}
	})
	.when('/items/newTask', {
		templateUrl: "partials/task-form.html",
		controller: 'AddTaskCtrl',
		resolve: {isAuth}
	})
	.when('/items/:taskId', {
		templateUrl: "partials/task-detail.html",
		controller: 'TaskDetailCtrl',
		resolve: {isAuth}
	})
	.when('/items/:taskId/edit', {
		templateUrl: "partials/task-form.html",
		controller: 'EditTaskCtrl',
		resolve: {isAuth}
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