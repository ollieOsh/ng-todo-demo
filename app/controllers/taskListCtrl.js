"use strict";

app.controller('TaskListCtrl', function($scope, DataFactory) {
  $scope.getTaskList = function () {
    // get the task list
    DataFactory.getTaskList()
    .then(function(tasks){
    	$scope.tasks = tasks;
    });
  };

  $scope.removeTask = function () {
    // remove a task
    DataFactory.getTaskList();
  };

  $scope.getTaskList();

});