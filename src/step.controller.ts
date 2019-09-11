import * as express from 'express';

import {mongodbHelper} from './mongodbHelper';

import * as mongoose from 'mongoose';
import { requestLoggerMiddleware } from 'requestLoggerMiddleware';
import {Step} from './Istep';
import * as fs from 'fs';
import * as path from 'path';

import {parse} from 'querystring';
//const router = express.Router();



export class stepModels{
    private router: express.Router;

    //private stepmode:mongoose.Model<IStep>;
    //private stepinstant:mongoos;
    
    private db:mongodbHelper;

    constructor(){
        
        //this.db = new mongodbHelper(); 
        //this.db.connectToDB();
        
    }

    public async saveData (req:express.Request,res:express.Response){
        
            console.log(req.body.macAddress);
        

        if(req.body.fileName == "stepTable.json"){
            const dataLength:Number = req.body.conTent.length;
            const absolutepath:string = path.resolve('src/samples/step.txt');
            fs.exists(absolutepath,function(exist){
                if(exist){
                    fs.appendFile(absolutepath,JSON.stringify(req.body),function(err){
                     if(err){   
                     console.log(err);}
                     else{
                         console.log('success');
                     }
                    });
                }
                else{
                 fs.writeFile(absolutepath,JSON.stringify(req.body),function(err){
                     if(err){
                     console.log(err);}
                     else{
                         console.log('success');
                     }
                 })
                }
            })
            if(dataLength!=0){
                for(let counter=0; counter < dataLength;counter++){
                    
                var stepinstant = new Step({
                    timezone:req.body.timeZone,
                    macAddress:req.body.macAddress,
                    distance:req.body.conTent[counter].distance,
                    timestamp:req.body.conTent[counter].timestamp,
                    calories:req.body.conTent[counter].calories,
                    steps:req.body.conTent[counter].steps
                    
                    
                })
   
                
               stepinstant.timeTrans();
               
               console.log(stepinstant);
                
               
            }
        }
            
        }
        else if(req.body.fileName=="pulseTable.json"){
            const absolutepath:string = path.resolve('src/samples/pulse.txt');
            fs.exists(absolutepath,function(exist){
                if(exist){
                    fs.appendFile(absolutepath,JSON.stringify(req.body),function(err){
                     if(err){   
                     console.log(err);}
                     else{
                         console.log('success');
                     }
                    });
                }
                else{
                 fs.writeFile(absolutepath,JSON.stringify(req.body),function(err){
                     if(err){
                     console.log(err);}
                     else{
                         console.log('success');
                     }
                 })
                }
            })
        }
        else{
            
        }
            // await this.stepinstant.save().then(doc=>{
            //     console.log(doc)
            // }).catch(err=>{
            //     console.log(err);
            // })

            //mongoose.model("stepModel",this.stepschema,"stepModels");

           
       
    }
}