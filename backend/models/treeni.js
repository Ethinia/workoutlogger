const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	liike:Array,
    paiva:String,
	weight:Number,
    sarjat:Number,
    toistot:Number,
	user:{type:String,index:true}
});

Schema.virtual("id").get(function() {
	return this._id;
})

module.exports = mongoose.model("Treeni",Schema);