"use strict";

app.controller('TaskDetailCtrl', function($scope, $location, $routeParams, DataFactory) {

	console.log("$routeParams.taskId", $routeParams.taskId);

	$scope.getTask = function() {
		// stuff goes here
		DataFactory.getTask($routeParams.taskId)
		.then(function(item){
			console.log("this is the task:", item);
			$scope.task = item;
			$scope.task.id = $routeParams.taskId;
		});
	};
	$scope.getTask();
});