myAppModule.factory('postFactory', function($http){
	var factory = {}

	factory.addPost = function(data, topic_id, callback){
		// console.log('add post data', data)
		$http.post('/posts',data).success(function(output){
			console.log('output return after add post',output)
			$http.get('/topics/' + topic_id).success(function(topic_data){
				callback(topic_data)
			})
		})
	}

	factory.like = function(post_id, topic_id, callback){
		$http.get('/posts/'+ post_id +'/like').success(function(output){

			$http.get('/topics/' + topic_id).success(function(topic_data){
				callback(topic_data)
			})
		})
	}

	factory.dislike = function(post_id, topic_id, callback){
		$http.post('/posts/'+ post_id +'/dislike').success(function(output){
			$http.get('/topics/' + topic_id).success(function(topic_data){
				callback(topic_data)
			})
		})
	}
	return factory;
})