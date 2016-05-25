var mongoose = require('mongoose')
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var PostSchema = new mongoose.Schema({
	post: {type: String, required: true},
	like: {type: Number, default: 0},
	dislike: {type: Number, default: 0},
	// Post has many comments
	comments: [ {type: mongoose.Schema.Types.ObjectId, ref:'Comment'} ],
	//Post belongs to a user and topic
	_creator: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
	_topic: {type: mongoose.Schema.Types.ObjectId, ref:'Topic'} 
	},
	{
		timestamps: true
	})

PostSchema.path("post").required(true, "Post cannot be blank");
var Post = mongoose.model("Post", PostSchema);

PostSchema.plugin(deepPopulate);