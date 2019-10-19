import * as mongoose from 'mongoose';


export interface Ipulse extends mongoose.Document {
    username?:string;
    macAddress?:number;
    timestamp?:number;
    timeTrans():void;
    timeStampString:String;
    timezone?:string;
    pulse?:number;
}

export const pulseschema: mongoose.Schema = new mongoose.Schema({
    username:String,
    macAddress:Number,
    
    timestamp:Number,
    timeStampString:String,
    timezone:String,
    pulse:Number
})

pulseschema.methods.timeTrans = function(){
        var day = new Date(this.timestamp).getUTCDate().toString();
        var month = new Date(this.timestamp).getUTCMonth().toString();
        var year = new Date(this.timestamp).getUTCFullYear().toString();
        this.timestampString = `${day}-${month}-${year}`;

        
        console.log(this.timestampString);
}

export const pulse : mongoose.Model<Ipulse> = mongoose.model("pulsemodel",pulseschema,"pulseCollects");