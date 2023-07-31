import mongoose from "mongoose";
import {Difficulty, Goal, WorkoutPlan} from "./workoutPlan.interface";


const WorkoutPlanSchema = new mongoose.Schema<WorkoutPlan>({
    userId:{type:mongoose.Schema.Types.ObjectId},
    name: {type: String},
    frequency: [{type: Number, enum: [0, 1, 2, 3, 4, 5, 6]}],
    difficulty: {type: Number, enum: Object.values(Difficulty)},
    goal: {type: Number, enum: Object.values(Goal)},
    duration: {type: Number},
    workouts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Workout'}]
})

const WorkoutPlanModel = mongoose.model<WorkoutPlan>('WorkoutPlan', WorkoutPlanSchema);

export default WorkoutPlanModel;


export const getWorkouts = () => WorkoutPlanModel.find()
export const getUserByEmail = (email:string) => WorkoutPlanModel.findOne({email})
export const getUserBySessionToken = (token:string) => WorkoutPlanModel.findOne({'auth.sessionToken':token})
export const getUserById = (id:string) => WorkoutPlanModel.findById(id)
export const createUser = (values: Record<string, any>) => new WorkoutPlanModel(values).save().then((user)=> user.toObject())
export const deleteUserById = (id:string) => WorkoutPlanModel.findOneAndDelete({_id:id})
export const updateUserById = (id:string,values:Record<string,any>) => WorkoutPlanModel.findByIdAndUpdate(id,values)
