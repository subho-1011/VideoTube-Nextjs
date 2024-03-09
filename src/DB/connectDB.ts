import mongoose, { ConnectOptions } from "mongoose";

interface connectedOptions extends ConnectOptions {
  useNewUrlParser: Boolean;
  useUnifiedTopology: Boolean;
}

const options: connectedOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DATABASE_URL = process.env.MONGODB_URI as string;

if (!DATABASE_URL) {
  throw new Error("No database URL provided");
}

const connectDB = async () => {
  try {
    mongoose.connect(DATABASE_URL);

    const db = mongoose.connection;
    db.on("connected", () => {
      console.log("Connected to MongoDB");
    });
    db.on("error", (err) => {
      console.log("Error connecting to MongoDB", err);
      process.exit(1);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
