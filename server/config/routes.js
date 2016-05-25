var mongoose = require('mongoose');
//go back up 2 folders and to controllers/cats rotues
var users = require('../controllers/users.js')
var showtimes = require('../controllers/showtimes.js')
var movies = require('../controllers/movies.js')

module.exports = function(app){
	//display all users
	app.get('/users', function (req, res){
	  users.index(req,res);
	})
	app.get('/users/:id', function (req,res){
		//access :id from req.params.id
		users.show(req,res);
	})

	app.post('/users', function (req, res){
		users.create(req,res);
	})

	app.post('/showtimes', function(req,res){
		showtimes.index(req,res);
	})
	app.post('/showtimes/search', function(req,res){
		showtimes.search(req,res);
	})
	app.post('/showtimes/update', function(req,res){
		console.log('routes new Date', req.body)
		showtimes.update(req,res);
	})
	app.get('/movies', function(req,res){
		movies.index(req,res);
	})

}


