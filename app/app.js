var app = angular.module("app", [
	"ngRoute",
	"controllers",
	"services"
]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "views/template.html",
		controller: "TemplateController"
	}).otherwise({
		redirectTo: "/"
	});
});