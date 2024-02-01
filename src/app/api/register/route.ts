import mongoose, { ConnectOptions, MongooseError } from "mongoose";
import User from "../models/User";

export async function POST(req: Request) {
  const mongoUrl = process.env.MONGO_URL;

  if (!mongoUrl) {
    return Response.json({
      error:
        "Database connection could not be established, missing the connection url.",
    });
  }

  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    const body = await req.json();

    const newUser = await User.create(body);

    return Response.json(newUser);
  } catch (error: unknown) {
    console.error("MongoDB connection error:", error);

    const errorMessage =
      error instanceof MongooseError &&
      error instanceof Error &&
      (error.message.includes("ENOTFOUND")
        ? "Unable to reach the database server. Please check your internet connection."
        : error.message.includes("ECONNREFUSED")
        ? "The database server refused the connection. Please check your database configuration."
        : error.message.includes("MongoNetworkError")
        ? "There was a network-related error while connecting to the database."
        : "Failed to connect to the database. Please try again later.");

    return Response.json({
      error: "MongoDB connection error",
      errorMessage,
    });
  }
}
