import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

export const connectToDatabase = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return mongoose.connection;
    }
    return await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
