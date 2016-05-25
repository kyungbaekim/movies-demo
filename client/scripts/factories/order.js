myAppModule.factory('orderFactory', function($http){
	// var orders = [{name: "Michael Choi", product: "Nike Shoes", quantity: '2', date:'April 3rd 2016'}];
	var orders = [];
	var factory = {};
	factory.getOrders = function(callback){
		$http.get('/orders').success(function(output){
			console.log('getorder output', output)
			orders = output
			// orders.push(output)
			callback(orders);
		})
	}
	//create add order function
	factory.addOrder = function(data){
		// console.log('store new order', data)
		$http.post('/orders', data).success(function(output){
			// console.log('output in addorder', output)
		})
	}
	return factory;
})