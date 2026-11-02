import { MongoClient } from "mongodb";

const connectDB = async () => {
    try {
        const client = new MongoClient(process.env.MONGODB_URI);

        await client.connect();

        console.log("Connected to MongoDB");

        return client.db();

    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

export default connectDB;