//import { Interface } from "readline";
import * as mongoose from 'mongoose';
export interface IStep extends mongoose.Document{
    username?:string;
    macAddress?:number;
    distance?:number;
    timestamp?:number;
    timeTrans():void;
    timeStampString:String;
    timezone?:string;
    calories?:Number;
    steps?:Number;
}

export const stepSchema : mongoose.Schema = new mongoose.Schema({
    username:String,
    macAddress:Number,
    distance:Number,
    timestamp:Number,
    calories:Number,
    timeStampString:String,
    timezone:String,
    steps:Number
})


export interface IStepModel extends IStep, Document {
  
}

stepSchema.methods.timeTrans = function(){
   var day = new Date(this.timestamp).getUTCDate().toString();
   var month = new Date(this.timestamp).getMonth().toString();
   var year = new Date(this.timestamp).getUTCFullYear().toString();

   this.timeStampString = `${day}-${month}-${year}`;
   console.log(this.timeStampString);
}

stepSchema.pre("save", function (next) {
  
  next();
});

//export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);

export const Step:mongoose.Model<IStep> = mongoose.model<IStep> ("stepModel",stepSchema);