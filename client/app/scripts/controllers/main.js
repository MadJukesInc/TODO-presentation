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

    function init() {
      taskService.getTasks().then((response) => {
        self.tasks = response.data;
      });
    };

    init();

    this.addTask = () => {
      taskService.addTask({title: this.newTaskTitle}).then(function () {
        init();
      });
    };

    this.deleteTask = (task) => {
      taskService.deleteTask(task._id).then(function () {
        init();
      });
    };
  })
;
