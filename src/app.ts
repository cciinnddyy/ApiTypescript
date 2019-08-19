import * as express from "express";
import * as cors from "cors";

import * as bodyparser from "body-parser";
import * as mongoose from "mongoose";

require("dotenv").config();

export class App {
    public app:express.Application;
    private db:mongoose.Connection;
    constructor (){
        this.app = express();
        this.initailizeMiddleware();
        this.connectToDB();
    }

    // ----------------- middleware 
    private initailizeMiddleware(){
        this.app.use(cors());
        this.app.use(bodyparser.json());
    }

    private connectToDB(){
        mongoose.connect(`mongodb://${process.env.MONGO_CONNECT_USER}:${process.env.MONGO_CONNECT_PW}@${process.env.SERVER_MONGO}/fitness_702`,
        {"user":`${process.env.DB_CONNECT_USER}`,"pass":`${process.env.DB_CONNECT_PW}`});
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', function() {
        console.log("successfully connect to the MongoDB fitness database");
});

    }
    
}





