var mongoose = require('mongoose');

var Post = mongoose.model('Post');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');

module.exports = {
	index: function(req,res){
		Comment.find({}, function(err,comments){
			res.json(comments)
		});
	},
	create: function(req,res){
		Post.findOne({_id: req.body.post_id}, function (err,post){
			var comment = new Comment({
				comment: req.body.comment,
				_creator: req.body.creator_id,
				_post: req.body.post_id
			})
			comment.save(function (comment_err){
				if(comment_err){
					errors = []
					for(var x in comment_err.errors){
						errors.push(comment_err.errors[x].message)
					}
					console.log('comment errors', errors)
					res.json({status:false, errors: errors})
				}else{
					console.log('comment saved successfully')
					//pust comment id to posts comment []
					post.comments.push(comment._id)
					post.save(function (post_err){
						if(post_err){
							res.json({status:false, error: post_err})
						}else{
							User.findOne({_id:req.body.creator_id}, function (user_err, user){
								if(user_err){
									res.json({status:false, errors: user_err})
								}else{
									//push comment id to users comments []
									user.comments.push(comment._id)
									user.save(function (err){
										if(err){
											res.json({status:false, errors:err})
										}else{
											console.log('saved user and comment')
											res.json({status:true})
										}
									})
								}
							})
						}
					})
				}
			})
		})
	}
}