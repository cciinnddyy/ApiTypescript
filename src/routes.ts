import * as express from 'express';

import {stepModels} from './step.controller'; 
export const router = express.Router();



router.use((req,res,next)=>{

    console.info(`${req.method} ${req.originalUrl}` );
        const startTime = new Date().getTime();
        res.on('finished',()=>{
            const elapsed = new Date().getTime() - startTime;
            console.log(`${req.method} ${req.originalUrl} ${res.status} Time taking: ${elapsed}`);

        });
        next();
})

router.post("/step",(req:express.Request,res:express.Response,next:express.NextFunction)=>{
    new stepModels().saveData(req,res);
})

