
/*

Mitä dataa pitää tallentaa

    Treeni Table
        - LiikeID (Primary key)
        - Liikkeen nimi

    Liike Table
        - Päivämäärä
        - Kilot
        - Sarjojen määrä
        - Toistot

Tästä eteenpäin nice to have
    - Epäonnistuneiden sarjojen määrä


_______________________________________________  

Treeni schema
    - Päivämäärä (primary key)
    - Liikkeet schema (array)
    - User


Liike schema
        - LiikeID (primary key)
        - Liikkeen nimi
        - Päivämäärä
        - Kilot
        - Sarjojen määrä
        - Toistot

User schema
    - Käyttäjä (MongoID)

______________________________________________

Historia chart:

    Liike
        Kilot
        Päivämäärä
            Kilot ja päivämäärä on X Y koordinaatisto



*/





// Dataa varten olio pyörittelyä

const UserInput = (props) => {

const [liike,setLiike] = useState({
    liike:"",
    date:0,
    weight:0,
    sarjat:0,
    toistot:0
})

// Tänne kauhia määrä muita hienoja funktioita ja user input formit yms.

}

// MongoDB schema hommia "item"

const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	liike:String,
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


/*
Indexointi

    - Liike
    - Päivämäärä
*/