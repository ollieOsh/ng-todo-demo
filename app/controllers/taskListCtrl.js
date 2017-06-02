"use strict";

app.controller('TaskListCtrl', function($scope, DataFactory) {
  $scope.getTaskList = function () {
    // get the task list
  };

  $scope.removeTask = function () {
    // remove a task
    DataFactory.getTaskList();
  };

});