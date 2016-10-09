'use strict';

angular.module('todoListApp')
	.directive('todo', ['Todo', function (Todo) {
		return {
			templateUrl: './app/directives/todo.html',
			scope: {
				props: '='
			},
			link: function ($scope) {
				$scope.edit = false;

				$scope.$watch('props.done', function (newValue) {
					Todo.update($scope.props.id, {done: newValue});
				});

				$scope.cancelEdit = function () {
					Todo.refresh().then(function () {
						$scope.edit = !$scope.edit;
					});
				};

				$scope.updateTodo = function () {
					Todo.update($scope.props.id, $scope.props).then(function () {
						$scope.edit = false;
					});
				};

				$scope.deleteTodo = function () {
					Todo.delete($scope.props.id).then(function () {
						Todo.refresh();
					});
				};
			}
		};
	}]);
