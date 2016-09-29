'use strict';

angular.module('todoListApp')
	.directive('todo', ['Todo', function (Todo) {
		return {
			templateUrl: './app/directives/todo.html',
			scope: {
				props: '='
			},
			link: function ($scope) {
				$scope.deleteTodo = function () {
					Todo.delete($scope.props.id);
				};
				$scope.$watch('props.done', function (newValue) {
					Todo.update($scope.props.id, { done: newValue });
				});
			}
		};
	}]);
