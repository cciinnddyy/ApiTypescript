import * as express from "express";
import * as cors from "cors";

import * as bodyparser from "body-parser";
//import * as mongoose from "mongoose";
import {router} from "./routes";


//import {requestLoggerMiddleware} from "./requestLoggerMiddleware";


require("dotenv").config();

export class App {
    public app:express.Application;
    //private db:mongoose.Connection;
    
    
    
    
    constructor (){
        //const logger = new requestLoggerMiddleware();
        this.app = express();
        this.initailizeMiddleware();
        //this.connectToDB();
        
    }

    // ----------------- middleware 
    private initailizeMiddleware(){
        this.app.use(cors());
        this.app.use(bodyparser.json());
        
        
        this.app.use(router);
    }

    
    //-------------------
    
    
}





