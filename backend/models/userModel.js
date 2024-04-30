import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  full_name: { type: String },
  address: { type: String },
  phone_number: { type: String },
  role: { type: String, enum: ['Admin', 'User'], default: 'User' },
  date_registered: { type: Date, default: Date.now },
  favorite_dogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dog' }],
  adoption_history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dog' }],
  foster_history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dog' }],
  saved_searches: [{ type: String }],
})

const userModel = new mongoose.model("Useer", userSchema);

export default userModel;