angular.module('app.main', [])
.controller('mainCtrl', function($scope, $http, $timeout) {

	$scope.gallery = []

	$scope.piece = null

	$scope.nextPiece = function() {
		$scope.piece = $scope.gallery.shift() || $scope.end

		if($scope.gallery.length < 10 && $scope.gallery.length) {
			$scope.refill($scope.gallery.slice(-1)[0].id+1)
		}
	}

	$scope.refill = function(ind) {
		//usually I would refer to a factory function here, but this is more MVP-ish.
		return $http({
			method: 'GET',
			url: '/api/gallery',
			//this parameter gives the server a starting point for items to send back.
			params: {start: ind}
		})
		.then(function(pieces) {
			// console.log('fetched',pieces.data.fetched)
			$scope.gallery = $scope.gallery.concat(pieces.data.fetched)
			if(!$scope.piece) $scope.nextPiece()
		})
	}

	//this is just a placeholder that marks the end of the data.
	$scope.end = {img:'',id:9999,desc:'Sorry, there aren\'t any more pieces left to view.'}

	$scope.refill(0)

	$scope.indicator = 0

	$scope.rate = function(id,added) { //added is 1 if liked, -1 if not
		$scope.nextPiece()

		//in place of dragging animation, this binds to the template to visually indicate what the user picked.
		$scope.indicator = added
		$timeout(function(){$scope.indicator = 0},450)

		return $http({
			method: 'PUT',
			url: '/api/gallery',
			data: {id:id, rating:added}
		})
		.then(function(){
			console.log('rated',id)
		})
	}

})