import { MongoClient } from "mongodb";

let db;

const connectDB = async () => {
    try {
        const client = new MongoClient(process.env.MONGODB_URI);

        await client.connect();

        db = client.db();

        console.log("Connected to MongoDB");

        return db;

    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

const getDB = () => {
    if (!db) {
        throw new Error("Database not connected");
    }

    return db;
};

export { getDB };
export default connectDB;