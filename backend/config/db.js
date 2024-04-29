import mongoose from "mongoose";

const mongoConnection = async () => {
    try {
        const process = await mongoose.connect('mongodb://localhost:27017/pawspal');
        if(process){
            console.log("Database is Connected");
        }
    } catch (error) {
        console.log(error);
    }
}

export default mongoConnection;