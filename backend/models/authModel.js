import mongoose, { Schema } from "mongoose";

const authSchema = mongoose.Schema({
    username : {
        type : String,
    },

    email : {
        type : String,
    },

    password : {
        type : String
    },

    isAdmin : {
        type : Boolean
    }
})

const authModel = new mongoose.model("User", authSchema);

export default authModel;