import mongoose from "mongoose";
import colors from "colors";
const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to Mongoose Database ${conn.connection.host}`.bgMagenta.white);
        
    } catch (error) {
        console.log(`Error in Mongoose ${error}`.bgRed.white);
        
    }
};

export default connectDB;