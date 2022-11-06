const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	liike:Array,
    date:Number,
	weight:Number,
    sarjat:Number,
    toistot:Number,
	user:{type:String,index:true}
});

Schema.virtual("id").get(function() {
	return this._id;
})

module.exports = mongoose.model("Item",Schema);