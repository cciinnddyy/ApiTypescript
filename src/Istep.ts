//import { Interface } from "readline";
import * as mongoose from 'mongoose';
import { stepModels } from 'step.controller';

export interface IStep extends mongoose.Document{
    username?:string;
    macAddress?:string;
    distance?:number;
    timestamp?:number;
    timeTrans():void;
    timeStampString:String;
    timezone?:string;
    calories?:Number;
    steps?:Number;
    weekGoal?:Number;
    findweeklybyname():IStep[];
}

export const stepSchema : mongoose.Schema <IStep> = new mongoose.Schema({
    username:String,
    macAddress:String,
    distance:Number,
    timestamp:Number,
    calories:Number,
    timeStampString:String,
    timezone:String,
    steps:Number,
    weekGoal:Number
})

//instance methods
stepSchema.methods.timeTrans = function(){
   var day = new Date(this.timestamp).getUTCDate().toString();
   var month = new Date(this.timestamp).getUTCMonth().toString();
   var year = new Date(this.timestamp).getUTCFullYear().toString();

   this.timeStampString = `${day}-${month}-${year}`;
   console.log(this.timeStampString);
}

//static methods
stepSchema.statics.findweeklybyname = function(name: string){
  Step.find({'username': `${name}`},(err,docs)=>{
    if(err){
      console.log(err);
    }
    else{
      return docs;
    }
  })

}


stepSchema.pre("save", function (next) {
  
  next();
});

//export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);

//mongoose model is a wrapper on the mongoose schema. mongoose schema structure the documents such as validators

export const Step:mongoose.Model<IStep> = mongoose.model<IStep> ("stepModel",stepSchema,"stepsmodels");
