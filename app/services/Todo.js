'use strict';

angular.module('todoListApp').service('Todo', ['$resource', function ($resource) {
	var self = this;
	var resource = $resource('http://localhost:3000/todos/:id', {}, {
		update: { method: 'patch' },
		create: { method: 'post' }
	});

	this.todos = resource.query();

	this.refresh = function () {
		self.todos = resource.query();
		return self.todos.$promise;
	};

	this.update = function (id, props) {
		return resource.update({id: id}, props).$promise;
	};

	this.delete = function (id) {
		return resource.delete({id: id}).$promise.then(function () {
			self.refresh();
		});
	};

	this.create = function (props) {
		return resource.create(props).$promise.then(function () {
			self.refresh();
		});
	};
}]);
