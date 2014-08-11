var services = angular.module("services", []);

services.factory("service", function() {
	return {
		getFoo: function() {
			return "bar";
		}
	};
});