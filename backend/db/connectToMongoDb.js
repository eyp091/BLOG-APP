import mongoose from 'mongoose'

const connectMongoDb = async () => {
    try {
        const uri = process.env.MONGO_DB_URI;        
        await mongoose.connect(uri);
        console.log("Connected to MongoDb");
    } catch (error) {
        console.log("Error connection to mongodb: ", error);
    }
}

export default connectMongoDb;