import * as mongoose from 'mongoose';

import {pulse} from "./Ipulse"

import {mongodbHelper} from './mongodbHelper';

import {Request,Response} from 'express';


export class pulseController {
    private db : mongodbHelper;
    
    constructor(){

       // this.db = new mongodbHelper();
       // this.db.connectToDB();
    }


    public savePulseAll(req:Request,res:Response){
        const pulsecount:number = req.body.conTent.length;
        if(pulsecount!=0){
            for(let counter =0; counter< pulsecount ;counter++){

               
                const pulseinstant = new pulse({
                    timestamp:req.body.conTent[counter].timestamp,
                    timezone:req.body.timeZone,
                    pulse:req.body.conTent[counter].pulse,
                    macAddress:req.body.macAddress,
                    username:"cindy",
                    
                })

                pulseinstant.timeTrans();
                
                pulseinstant.save().then(doc=>{
                    
                    console.log(doc);
                })
                
                .catch(err=>{
                    console.log(err);
                })

                
            }

            
        }
        
    }

    
}