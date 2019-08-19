import * as express from "express";
import * as cors from "cors";

import * as bodyparser from "body-parser";

export class App {
    public app:express.Application;
    constructor (){
        this.app = express();
        this.initailizeMiddleware();
        this.connectToDB();
    }
    private initailizeMiddleware(){
        this.app.use(cors());
        this.app.use(bodyparser.json());
    }

    private connectToDB(){

    }
    
}


// ----------------- middleware 


