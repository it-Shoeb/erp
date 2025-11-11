// import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    // mongoose.set("strictQuery", true);
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
