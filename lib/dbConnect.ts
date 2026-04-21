import mongoose from "mongoose";

async function dbConnect() {
   const connectionString = process.env.AZURE_COSMOSDB_CONNECTION_STRING;

    if (!connectionString) {
        throw new Error(
            'Missing AZURE_COSMOSDB_CONNECTION_STRING in .env.local'
        );
    }

    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        return await mongoose.connect(connectionString);
    } catch (error) {
        console.error('Error connecting to MongoDB/CosmosDB:', error);
        throw error;
    }
}

export default dbConnect;
