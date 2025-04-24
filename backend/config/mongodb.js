import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("DB Connected successfully!");
    } catch (error) {
        console.error("DB connection error: ", error);
        process.exit(1); // Stop the server if DB connection fails
    }
};

export default connectDB;
