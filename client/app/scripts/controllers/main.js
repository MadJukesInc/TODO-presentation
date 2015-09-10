'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function (taskService) {
    'ngInject';
    let self = this;

    this.init = () => {
      taskService.getTasks().then((response) => {
        self.tasks = response.data;
      });
    };

    this.init();

    this.addTask = () => {
      taskService.addTask({title: this.newTaskTitle}).then(() => {
        this.init();
      });
    };

    this.updateTask = (task) => {
      taskService.updateTask(task).then(() => {
        this.init();
      });
    };

    this.deleteTask = (task) => {
      taskService.deleteTask(task._id).then(() => {
        this.init();
      });
    };
  })
;
