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

    this.tasks = taskService.getTasks();
    this.addTask = () =>{
      taskService.addTask(this.newTaskTitle);
    }
  });
