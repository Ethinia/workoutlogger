const express = require("express");
const apiroute = require("./routes/apiroute");
//const bcrypt = require("bcrypt");
const crypto = require("crypto");
const mongoose = require("mongoose");
//const userModel = require("./models/user");
//const sessionModel = require("./models/session");

let app = express();

app.use(express.json());

let port = process.env.PORT || 3001;

//MONGOOSE CONNECTION

const mongo_user = "WORKOUT";
const mongo_password = "WORKOUTLOGGER";
const mongo_url = "workoutlogger.vzhxnzs.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect("mongodb+srv://"+mongo_user+":"+mongo_password+"@"+mongo_url+"/shoppingdatabase?retryWrites=true&w=majority").then(
	() => console.log("Connected to mongodb"),
	(err) => console.log("Failed to connect. Reason",err)
);

mongoose.set("toJSON",{virtuals:true});

//LOGIN DATABASES joskus

//MIDDLEWARE

createToken = () => {
	let token = crypto.randomBytes(64);
	return token.toString("hex");
}

app.use("/api",apiroute);

app.listen(port);

console.log("Running in port",port);