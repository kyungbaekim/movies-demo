myAppModule.factory('movieFactory', function($http){
	var factory = {};
	var trailer = '';

	factory.searchMovies = function (data, callback){
  	console.log('movie search', data.name)
  	$http.get('http://www.omdbapi.com/?s='+ data.name + '&y=&plot=full&r=json').success(function(output){
  		console.log('movies', output)
  		callback(output)
  	})
  }
 factory.getMovie = function (data, callback){
		console.log('movie search', data.name)
		$http.get('http://www.omdbapi.com/?i='+ data + '&y=&plot=short&r=json').success(function(output){
			console.log('movie', output)
			callback(output)
		})
  }

  factory.setTrailer = function(data){
  	trailer = data
  	console.log('set trailer', data)
  }

  factory.getTrailer = function(callback){
  	callback(trailer)
  }
	return factory
})

