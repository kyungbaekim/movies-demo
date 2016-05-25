
myAppModule.controller('ordersController', function ($scope, orderFactory, customerFactory, productFactory){
	$scope.orders = [];
	// $scope.quantity = [];
	$scope.customers2 = [];
	// $scope.quantities = [{num:1},{num:2},{num:3}


	function getProducts(){
		productFactory.getProducts(function(data){
			$scope.products = data;
		})
	}
  function getOrders(){
  	orderFactory.getOrders(function(data){
			$scope.orders = data;
		})	
  }
	function getCustomers(){
		customerFactory.getCustomers(function(data){
		$scope.customers2 = data;
	})
	}
	getProducts();
  getOrders();
	getCustomers()

	$scope.addOrder = function(){
		orderFactory.addOrder($scope.newOrder)
		productFactory.subtractInventory($scope.newOrder)
		getOrders()
		$scope.newOrder = {};
		getProducts();
	}
	$scope.onChange = function(product){
		// console.log(product, 'hellllo')
		$scope.quantities = []

		for (var i = 1; i <= product.product.quantity; i++) {
			$scope.quantities.push({num:i})
		};
		// console.log($scope.quantities)
		}
	})

