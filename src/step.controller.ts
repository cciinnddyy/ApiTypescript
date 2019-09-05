import * as express from 'express';

import {mongodbHelper} from './mongodbHelper';

import * as mongoose from 'mongoose';
import { requestLoggerMiddleware } from 'requestLoggerMiddleware';

//const router = express.Router();



export class stepModels{
    private router: express.Router;

    private stepschema:mongoose.Schema;
    private stepmodel:mongoose.Document;
    

    constructor(){
        this.stepschema = new mongoose.Schema({
            username: String,
            macAddress: {
                type:Number,
                require:true,
                unique:true
            }
        })
        mongoose.model("stepModel",this.stepschema);
    }

    public saveData (req:express.Request,res:express.Response){
        
            console.log(req.body);
            
            this.stepmodel = new mongoose.Model(req.body);
            this.stepmodel.save().then(doc=>{
                if(doc!=null){
                    res.status(201).send('success');
                }
                
            }).catch(err=>{
                res.status(500).json(err);
                console.log(err);
            })
        
            
            
            res.end();
        
        
    }
}