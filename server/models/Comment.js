var mongoose = require('mongoose')

var CommentSchema = new mongoose.Schema({
	comment: {type: String, required: true},
	//Comment belongs to a user and post
	_creator: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
	_post: {type: mongoose.Schema.Types.ObjectId, ref:'Post'} 
	},
	{
		timestamps: true
	})

CommentSchema.path("comment").required(true, "Comment cannot be blank");
var Comment = mongoose.model("Comment", CommentSchema);