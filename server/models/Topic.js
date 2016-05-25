var mongoose = require('mongoose')
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var TopicSchema = new mongoose.Schema({
	topic: {type: String, required: true},
	description: {type: String, required: true},
	category: {type: String, required: true},
	// Topic has many posts
	posts: [ {type: mongoose.Schema.Types.ObjectId, ref:'Post'} ],
	//Topic belongs to a user
	_creator: {type: mongoose.Schema.Types.ObjectId, ref:'User'} 
	},
	{
		timestamps: true
	})

TopicSchema.path('topic').required(true,"Topic cannot be blank")

var Topic = mongoose.model("Topic", TopicSchema);

TopicSchema.plugin(deepPopulate);