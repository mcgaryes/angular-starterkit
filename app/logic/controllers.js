var controllers = angular.module("controllers", []);
controllers.controller("TemplateController", function($scope,service) {
	$scope.foo = service.getFoo();
});