const express = require("express");
const liikeModel = require("../models/liike");

const router = express.Router();

//DATABASE


router.get("/wolapp",function(req,res) {
	let query = {}
	liikeModel.find(query,function(err,liikkeet) {
		if(err) {
			console.log("Failed to find liikkeet. Reason",err);
			return res.status(500).json({message:"Internal server error"})
		}
		return res.status(200).json(liikkeet);
	})
});

router.post("/wolapp",function(req,res) {
	if(!req.body) {
		return res.status(400).json({message:"Bad request"});
	}
	if(!req.body.liikeID) {
		return res.status(400).json({message:"Bad request"});
	}
	let liike = new liikeModel({
		liikeID:req.body.liikeID,
		name:req.body.name,
		paiva:req.body.paiva,
        weight:req.body.weight,
        sarjat:req.body.sarjat,
        toistot:req.body.toistot,
		//user:req.session.user
	})
	liike.save(function(err) {
		if(err) {
			console.log("Failed to create liike. Reason",err);
			return res.status(500).json({message:"Internal server error"})
		}
		return res.status(201).json({message:"Created"});
	})
})

router.delete("/wolapp/:id",function(req,res) {
	liikeModel.deleteOne({"_id":req.params.id}, function(err) {
		if(err) {
			console.log("Failed to remove liike. Reason",err);
			return res.status(500).json({message:"Internal server error"})
		}
		return res.status(200).json({message:"Success"});
	})
})

router.put("/wolapp/:id",function(req,res) {
	if(!req.body) {
		return res.status(400).json({message:"Bad request"});
	}
	if(!req.body.liikeID) {
		return res.status(400).json({message:"Bad request"});
	}
	let liike = {
		liikeID:req.body.liikeID,
		name:req.body.name,
		paiva:req.body.paiva,
        weight:req.body.weight,
        sarjat:req.body.sarjat,
        toistot:req.body.toistot,
		//user:req.session.user
	}
	liikeModel.replaceOne({"_id":req.params.id},liike,function(err) {
		if(err) {
			console.log("Failed to update liike. Reason",err);
			return res.status(500).json({message:"Internal server error"});
		}
		return res.status(200).json({message:"Success"});
	})
})

module.exports = router;