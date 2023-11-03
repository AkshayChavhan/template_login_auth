import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
// for now we are using mongodb menory and after completion we will replace
// it with mongodb altas

async function connect () {
    const mongodb = await MongoMemoryServer.create();
    const getUri = mongodb.getUri();

    mongoose.set("strictQuery" , true);
    const db = await mongoose.connect(getUri);
    console.log("Db connected");
    return db;
}

export default connect;