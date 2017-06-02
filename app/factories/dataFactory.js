"use strict";

app.factory("DataFactory", function($q, $http, FBCreds) {

  const addTask = () => {

  };

  const editTask = (taskId, editedObject) => {
    return $q((resolve, reject) => {
      $http.patch(`${FBCreds.databaseURL}/items/${taskId}.json`, JSON.stringify(editedObject))
      .then(function(itemObject){
        resolve(itemObject.data);
      })
      .catch(function(error){
        reject(error);
      });
    });
  };

  const getTask = (taskId) => {
    return $q(function(resolve, reject){
      $http.get(`${FBCreds.databaseURL}/items/${taskId}.json`)
      .then(function(itemObject){
        resolve(itemObject.data);
      })
      .catch(function(error){
        reject(error);
      });
    });
  };

  const getTaskList = () => {
    let tasks = [];
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/items.json`)
      .then((itemObject) => {
      let itemCollection = itemObject.data;
      console.log("itemCollection", itemCollection);
      Object.keys(itemCollection).forEach((key) => {
        itemCollection[key].id = key;
        tasks.push(itemCollection[key]);
      });
      resolve(tasks);
    })
    .catch((error) => {
     reject(error);
    });
  });
};

  const removeTask = () => {

  };

  return {
    addTask,
    getTask,
    editTask,
    getTaskList,
    removeTask
  };

});