'use strict';

angular.module('clientApp')
  .service('taskService', function(){
    this.taskList = [{title: 'First', complete: false}];
    this.addTask = function(task) {
      this.taskList.push({title: task, complete: false});
    };
    this.getTasks = function() {
      return this.taskList;
    };

    return this;
  });
