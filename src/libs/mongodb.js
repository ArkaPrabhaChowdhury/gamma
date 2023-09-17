import mongoose from "mongoose"

const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:gammainnovations@gammainnovations.6kp06s0.mongodb.net/?retryWrites=true&w=majority");
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;