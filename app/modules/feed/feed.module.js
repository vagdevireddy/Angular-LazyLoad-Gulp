angular.module("feedModule", [
	{
		name: "headerModule",
		files: ['modules/header/header.module.js']	
	}
])
.controller("feedCtrl", ['$scope', function ($scope) {
	console.log('feed controller')
}]);