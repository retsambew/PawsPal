import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    species : {type : String, required : true},
    breed: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    size: { type: String, enum: ['Small', 'Medium', 'Large']},
    description: { type: String},
    image_url: { type: String },
    adoption_status: { type: String, enum: ['Available', 'Adopted', 'Fostered'] },
    health_status: { type: String },
    vaccination_status: { type: String },
    spayed_neutered: { type: Boolean, default: false },
    fostered_adopted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date_added: { type: Date, default: Date.now }
},{timestamps : true});

const petModel = mongoose.model("Pets", petSchema);

export default petModel;