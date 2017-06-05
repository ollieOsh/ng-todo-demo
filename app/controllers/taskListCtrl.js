"use strict";

app.controller('TaskListCtrl', function($scope, DataFactory, $location, AuthFactory, SearchTermData) {

$scope.searchText = SearchTermData;
let user = AuthFactory.getUser();

if(user === null) {
  console.log("AIN'T NO USER");
  $location.path('/');
}

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

  $scope.updateComplete = function (taskId, complete) {
    console.log('complete', complete);
    DataFactory.editTask(taskId, {isCompleted: complete})
    .then(() => {
      $scope.getTaskList();
    });
  };

  $scope.getTaskList();

});