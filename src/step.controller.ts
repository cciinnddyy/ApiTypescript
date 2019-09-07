import * as express from 'express';

import {mongodbHelper} from './mongodbHelper';

import * as mongoose from 'mongoose';
import { requestLoggerMiddleware } from 'requestLoggerMiddleware';
import {Step} from './Istep';

//const router = express.Router();



export class stepModels{
    private router: express.Router;

    private stepschema:mongoose.Schema;
    //private stepmode:mongoose.Model<IStep>;
    private stepinstant:mongoose.Document;
    
    private db:mongodbHelper;

    constructor(){
        this.stepschema = new mongoose.Schema({
            username: String,
            macAddress: {
                type:Number,
                require:true,
                unique:true
            }
        })
        this.db = new mongodbHelper(); 
        this.db.connectToDB();
        
    }

    public async saveData (req:express.Request,res:express.Response){
        
            console.log(req.body);
            
            this.stepinstant = new Step({
                username:req.body.username,
                macAddress:req.body.macAddress
            })

            await this.stepinstant.save().then(doc=>{
                console.log(doc)
            }).catch(err=>{
                console.log(err);
            })
            //mongoose.model("stepModel",this.stepschema,"stepModels");

            //steps.create({username:req.body.username,macAddress:req.body.macAddress});
       
    }
}