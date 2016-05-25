myAppModule.controller('moviesController', function ($scope, movieFactory, showtimeFactory, $routeParams, $location){
	function getShowtimes(){
		showtimeFactory.getShowtimes(function (data){
			$scope.showtimes = data
		})
	}
	//check if getShowtimes AJAX request has been done intially
	function checkInitialRequest(){
		showtimeFactory.getInitialShowtime(function (status){
			console.log('showtime status', status)
			if(status == false){
				getShowtimes();
			}else{
				//get the saved showtime if AJAX request already been done
				showtimeFactory.getSavedShowtimes(function (showtimes){
					$scope.showtimes = showtimes
					console.log('saved showtimes', showtimes)
				})
			}
		})
	}
	// getShowtimes();
	checkInitialRequest();

	$scope.searchMovies = function(){
		movieFactory.searchMovies($scope.newSearch, function (data){
			$scope.searchMovies = data.Search
			console.log('in search controller', data.search)
			$scope.newSearch = {};
		})
	}

	function getDates(){
		showtimeFactory.getDates(function (dates){
			$scope.dates = dates
		})
	}
	//if theater name exist, set scope.theater
	if($routeParams.name != null ){
		$scope.theater = $routeParams.name
		getDates();
		console.log('theater', $scope.theater)
	}
	//if moviename exist, getMovie
	if($routeParams.moviename != null){
		movieFactory.getMovie($routeParams.moviename,function (data){
			$scope.movie = data
			movieFactory.getTrailer(function (output){
				$scope.trailer = output
				console.log('trailer', output)
			})
		})
	}

	$scope.showmovie = function(movie, trailer){
		console.log('im in show movie', movie)
		var imdb_id = movie.slice(movie.length-10, movie.length-1)
		console.log(imdb_id)
		//save trailer in factory to be retrieved from all controllers
		movieFactory.setTrailer(trailer)
		$location.url('/movie/' + imdb_id)
	}

	$scope.updateShowtime = function(newDate){
		console.log('im in updateShowtime')
		console.log('newDate', newDate)
		showtimeFactory.updateShowtime(newDate, function (output){
			console.log('output update', output)
		})

	}

	$scope.searchTheaters = function(){
		console.log('scope new theater', $scope.newTheater)
		showtimeFactory.searchTheaters($scope.newTheater,function (output){
			$scope.showtimes = output
		})
		$scope.newTheater = {};
	}

})