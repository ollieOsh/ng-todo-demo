"use strict";

app.controller('EditTaskCtrl', function($scope, DataFactory, $routeParams, $location) {

  $scope.editedTask = {
  	assignedTo: "",
  	dependencies: "",
  	dueDate: "",
  	urgency: "",
  	description: ""
  };

	DataFactory.getTask($routeParams.taskId)
	.then(function(item){
		console.log("this is the task:", item);
		$scope.editedTask = item;
		$scope.editedTask.id = $routeParams.taskId;
	});
  $scope.editTask = function() {
    // stuff goes here
    console.log("edited task object", $scope.editedTask);

    DataFactory.editTask($scope.editedTask.id, $scope.editedTask)
    .then((response) => {
    	console.log("response", response);
    	console.log("location", $location);
    	$location.path('/');
    });
  };

});