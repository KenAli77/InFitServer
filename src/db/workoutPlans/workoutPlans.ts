import mongoose from "mongoose";
import {Difficulty, Goal, IWorkoutPlan} from "./workoutPlan.interface";


export type WorkoutPlanDocument = mongoose.Document & IWorkoutPlan & {}

const WorkoutPlanSchema = new mongoose.Schema<IWorkoutPlan>({
    name: {type: String},
    frequency: [{type: Number, enum: [0, 1, 2, 3, 4, 5, 6]}],
    difficulty: {type: Number},
    goal: {type: Number},
    duration: {type: Number},
    workouts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Workout'}],
    userId: {type: mongoose.Schema.Types.ObjectId, ref :'User'},
})

const WorkoutPlanModel = mongoose.model<WorkoutPlanDocument>('WorkoutPlan', WorkoutPlanSchema);

export default WorkoutPlanModel;

export const getWorkouts = (userId: string) => WorkoutPlanModel.find({userId})
export const getWorkoutById = (id: string) => WorkoutPlanModel.findById(id)
export const createWorkoutPlan = (workoutPlan: IWorkoutPlan) => new WorkoutPlanModel(workoutPlan).save()
export const deleteWorkoutPlan = (id: string) => WorkoutPlanModel.findOneAndDelete({_id: id})
export const updateWorkoutPlan = (id: string, workoutPlan: IWorkoutPlan) => WorkoutPlanModel.findByIdAndUpdate(id, workoutPlan)
