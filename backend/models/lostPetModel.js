import mongoose from "mongoose";

const lostPetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    species : {type : String, required : true},
    breed: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    size: { type: String, enum: ['Small', 'Medium', 'Large']},
    description: { type: String},
    image_url: { type: String },
    lastSeenOn : {type : Date},
    pet_owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date_added: { type: Date, default: Date.now }
},{timestamps : true});

const lostPetModel = mongoose.model("LostPets", lostPetSchema);

export default lostPetModel;