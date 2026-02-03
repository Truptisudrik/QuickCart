import mongoose from "mongoose";

let (!cached) {
    cached = global.mongoose = { conn: null, promise:null }

}

async function connectDB(){

    if(cached.com){
        return cached.conn
    }

    if(!cached.promise){
        const opts = {
            BufferCommands:false
        }
    

    cached.promise =  mongoose.connect('${process.env.MONGODB_URI}/quickcart',opts).then(mongoose=> {return mongoose})
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default connectDB