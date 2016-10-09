'use strict';

angular.module('todoListApp')
	.directive('todoList', ['Todo', function (Todo) {
		return {
			templateUrl: './app/directives/todoList.html',
			link: function ($scope, element, attributes) {
				$scope.todoService = Todo;
				$scope.todos = Todo.todos;
			}
		};
	}]);
