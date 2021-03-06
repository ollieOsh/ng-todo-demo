"use strict";

app.factory("DataFactory", function($q, $http, FBCreds, AuthFactory) {

  let user = AuthFactory.getUser();

  const addTask = (newObj) => {
    return $q((resolve, reject) => {
      $http.post(`${FBCreds.databaseURL}/items.json`, JSON.stringify(newObj))
      .then((itemId) => {
        resolve(itemId);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  const editTask = (taskId, editedObject) => {
    console.log('editing', editedObject);
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
    console.log("myURL", `${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`);
    let tasks = [];
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
      .then((itemObject) => {
        if(itemObject.data){
          let itemCollection = itemObject.data;
          console.log("itemCollection", itemCollection);
          Object.keys(itemCollection).forEach((key) => {
            itemCollection[key].id = key;
            tasks.push(itemCollection[key]);
          });
        }
      resolve(tasks);
    })
    .catch((error) => {
     reject(error);
    });
  });
};

  const removeTask = (taskId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FBCreds.databaseURL}/items/${taskId}.json`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  return {
    addTask,
    getTask,
    editTask,
    getTaskList,
    removeTask
  };

});