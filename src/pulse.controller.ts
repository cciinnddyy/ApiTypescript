import * as mongoose from 'mongoose';

import {pulse} from "./Ipulse"

import {mongodbHelper} from './mongodbHelper';

import {Request,Response} from 'express';


export class pulseController {
    private db : mongodbHelper;
    
    constructor(){

        //this.db = new mongodbHelper();
        //this.db.connectToDB();
    }


    public savePulseAll(req:Request,res:Response){
        const pulsecount:number = req.body.content.length;
        if(pulsecount!=0){
            for(let counter =0; counter< pulsecount ;counter++){

               
                var pulseinstant = new pulse({
                    timestamp:req.body.content[counter].timezone,
                    pulse:req.body.content[counter].pulse,
                    macAddress:req.body.macAddress,
                    username:"cindy",
                
                })

                pulseinstant.timeTrans();

                
            }
            
        }
        
    }
}