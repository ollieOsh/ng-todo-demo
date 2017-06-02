"use strict";

app.controller('EditTaskCtrl', function($scope, DataFactory, $routeParams, $location) {

  $scope.task = {};

	DataFactory.getTask($routeParams.taskId)
	.then(function(item){
		console.log("this is the task:", item);
		$scope.task = item;
		$scope.task.id = $routeParams.taskId;
	});
  $scope.submitTask = function() {
    // stuff goes here
    console.log("edited task object", $scope.task);

    DataFactory.editTask($scope.task.id, $scope.task)
    .then((response) => {
    	console.log("response", response);
    	console.log("location", $location);
    	$location.path('/');
    });
  };

});