myAppModule.factory('topicFactory', function($http){
	var factory = {};
	var categories = [{name: 'HTML'},{name: 'Ruby'}, {name: 'Javascript'}, {name: 'Game of Thrones'}, {name: 'Silicon Valley'}]
	
	factory.getCategories = function(callback){
		callback(categories);
	}	
	factory.getTopics = function (callback){
		$http.get('/topics').success(function(output){
			// console.log("output from get topics", output)
			topics = output
			callback(topics);
		})
	}

	factory.getTopic = function(data, callback){
		$http.get('/topics/' + data).success(function(output){
			topic = output
			console.log('show topic factory', topic)
			callback(topic)
		})
	}
	factory.addTopic = function (data,callback){
		//pass JSON data from form
		$http.post('/topics',data).success(function(output){
			console.log('add product output', output)
			callback(output)
		})
	}
	return factory;
})
