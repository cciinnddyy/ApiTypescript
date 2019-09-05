import * as express from 'express';

export class requestLoggerMiddleware{
    private startTime :number;
    private req:express.Request;
    private res:express.Response;
    private next:express.NextFunction;
    
    constructor(){
        console.info(`${this.req.method} ${this.req.originalUrl}` );
        this.startTime = new Date().getTime();
        this.res.on('finished',()=>{
            const elapsed = new Date().getTime() - this.startTime;
            console.log(`${this.req.method} ${this.req.originalUrl} ${this.res.status} Time taking: ${elapsed}`);

        });
        this.next();
    }


} 


