import * as mongoose from 'mongoose';


export interface Ipulse extends mongoose.Document {
    username?:string;
    macAddress?:number;
    timestamp?:number;
    timeTrans():void;
    timeStampString:String;
    timezone?:string;
    pulse?:Number;
}

export class pulseSchema extends mongoose.Schema {
    username?:String;
    macAddress?:number;
    
    timestamp?:number;
    timeStampString:String;
    timezone?:string;
    pulse?:Number;
    
    public timeTrans():void{
        var day = new Date(this.timestamp).getUTCDate().toString();
        var month = new Date(this.timestamp).getMonth().toString();
        var year = new Date(this.timestamp).getUTCFullYear().toString();

        this.timeStampString = `${day}-${month}-${year}`;
        console.log(this.timeStampString);
    }
}


export const pulseschema  = new pulseSchema();

export const pulse : mongoose.Model<Ipulse> = mongoose.model("pulsemodel",pulseschema,"pulseCollects");