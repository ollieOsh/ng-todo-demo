"use strict";

app.controller('AddTaskCtrl', function($scope, DataFactory, $location) {

  $scope.task = {
  	isCompleted: false
  };

  $scope.submitTask = function () {
    // stuff goes here
    console.log("new task", $scope.task);
    DataFactory.addTask($scope.task)
    .then((response) => {
    	console.log("response", response);
    	$location.path('/');
    });
  };

});