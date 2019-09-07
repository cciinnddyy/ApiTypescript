//import { Interface } from "readline";
import * as mongoose from 'mongoose';
export interface IStep extends mongoose.Document{
    username?:string;
    macAddress?:number;
}

const stepSchema : mongoose.Schema = new mongoose.Schema({
    username:String,
    macAddress:Number

})


export interface IStepModel extends IStep, Document {
  
}

stepSchema.pre("save", function (next) {
  
  next();
});

//export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);

export const Step:mongoose.Model<IStep> = mongoose.model<IStep> ("stepModel",stepSchema);