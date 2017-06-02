"use strict";

app.controller('TaskListCtrl', function($scope, DataFactory, $location) {
  $scope.getTaskList = function () {
    // get the task list
    DataFactory.getTaskList()
    .then(function(tasks){
    	$scope.tasks = tasks;
    });
  };

  $scope.removeTask = function (taskId) {
    // remove a task
    DataFactory.removeTask(taskId)
    .then(() => {
    	$scope.getTaskList();
    });
  };

  $scope.getTaskList();

});