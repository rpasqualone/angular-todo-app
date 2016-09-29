'use strict';

angular.module('todoListApp')
	.directive('todoForm', ['Todo', function (Todo) {
		return {
			templateUrl: './app/directives/todoForm.html',
			link: function ($scope) {
				$scope.props = {
					done: false,
					title: '',
					message: ''
				};
				$scope.createTodo = function () {
					Todo.create($scope.props).then(function () {
						$scope.props.title = '';
						$scope.props.message = '';
					});
				}
			}
		};
	}]);
