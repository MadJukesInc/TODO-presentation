'use strict';

angular.module('clientApp')
  .directive('taskItem', function () {
    return {
      restrict: 'EA',
      templateUrl: 'views/task-item.html',
      scope: {
        task: '='
      },
      controllerAs: 'taskItem',
      bindToController: true,
      controller: function ($scope) {
        this.taskCtrl = $scope.$parent.$parent.main;
      }
    };
  });
