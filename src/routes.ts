import * as express from 'express';

import {stepModels} from './step.controller'; 

import {pulseController} from './pulse.controller';

export const router = express.Router();



router.use((req,res,next)=>{

    console.log(`${req.method} ${req.originalUrl}` );
        const startTime = new Date().getTime();
    
        res.on('finished',()=>{
           const elapsed = new Date().getTime() - startTime;
           console.log(`${req.method} ${req.originalUrl} ${res.status} Time taking: ${elapsed}`);

       });
    
        next();
})

router.post("/step",(req:express.Request,res:express.Response)=>{
    new stepModels().saveData(req,res);
    
    res.send('Hello');
    
    //console.log();
    
})

router.post("/pulse",(req:express.Request,res:express.Response)=>{

    const pulsectrl = new pulseController();
    
    pulsectrl.savePulseAll(req,res);
    
    res.send("prankster");

})

router.post(`/step/weekly`,(req:express.Request,res:express.Response)=>{
    var queryResult = "";
    console.log(req.body.name);
    
    new stepModels().ListWeekData(req.body.name,res);

    //res.send(queryResult);
    //res.send("stepmodelLists");
})