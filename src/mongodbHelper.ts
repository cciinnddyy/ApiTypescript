
import * as mongoose from 'mongoose';

export class mongodbHelper{

private db:mongoose.Connection;

public connectToDB = ()=>{
    mongoose.connect(`mongodb://${process.env.MONGO_CONNECT_USER}:${process.env.MONGO_CONNECT_PW}@${process.env.SERVER_MONGO}/fitness_702`,
    {"user":`${process.env.DB_CONNECT_USER}`,"pass":`${process.env.DB_CONNECT_PW}`});
    this.db = mongoose.connection;
    this.db.on('error', console.error.bind(console, 'connection error:'));
    this.db.once('open', function() {
    console.log("successfully connect to the MongoDB fitness database");
});

}

}