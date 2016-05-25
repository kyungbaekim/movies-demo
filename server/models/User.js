var mongoose = require('mongoose');
//create user shema
var UserSchema = new mongoose.Schema({
	name: {type: String, unique: true},
	//User has many topics,comments, posts
	topics: [ {type: mongoose.Schema.Types.ObjectId, ref:'Topic'} ],
	comments: [ {type: mongoose.Schema.Types.ObjectId, ref:'Comment'} ],
	posts: [ {type: mongoose.Schema.Types.ObjectId, ref:'Post'} ]
	},
	{
		timestamps: true
	})

UserSchema.path("name").required(true, "Name cannot be blank");

mongoose.model("User", UserSchema);