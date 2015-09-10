'use strict';

angular.module('clientApp')
  .service('taskService', function($http, $q){
    this._serviceUrl = 'http://localhost:8000/todos';

    this.addTask = function(task) {
      return $http.post(this._serviceUrl, task)
    };

    this.getTasks = function() {
      return $http.get(this._serviceUrl)
    };

    this.deleteTask = function(taskId) {
      return $http.delete(this._serviceUrl + '/' + taskId)
    };

    this.updateTask = function(task) {
      return $http.put(this._serviceUrl + '/' + task._id, {title: task.title, completed: task.completed});
    };

    return this;
  });
