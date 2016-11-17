angular.module("friendsList")
.controller("mainCtrl", function($scope) {
	$scope.name = "Brayden"; 
	$scope.friends = ["Kevin", "Josh", "Joe", "Brian", "Stephen", "Matt", "Lucas"]
	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = "";
	}
})