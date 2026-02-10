import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionURL = `${process.env.MONGODB_URI}/${DB_NAME}`;

    await mongoose.connect(connectionURL);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("mongo err", error.message);
    process.exit(1);
  }
};

export default connectDB;
