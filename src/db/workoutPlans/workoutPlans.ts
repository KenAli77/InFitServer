import mongoose from "mongoose";
import {Difficulty, Goal, WorkoutPlan} from "./workoutPlan.interface";


const WorkoutPlanSchema = new mongoose.Schema<WorkoutPlan>({
    name: {type: String},
    frequency: [{type: Number, enum: [0, 1, 2, 3, 4, 5, 6]}],
    difficulty: {type: Number},
    goal: {type: Number},
    duration: {type: Number},
    workouts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Workout'}],
    userId: {type: mongoose.Schema.Types.ObjectId, ref :'User'},
})

const WorkoutPlanModel = mongoose.model<WorkoutPlan>('WorkoutPlan', WorkoutPlanSchema);

export default WorkoutPlanModel;

export const getWorkouts = (userId: string) => WorkoutPlanModel.find({userId})
export const getWorkoutById = (id: string) => WorkoutPlanModel.findById(id)
export const createWorkoutPlan = (workoutPlan: WorkoutPlan) => new WorkoutPlanModel(workoutPlan).save().then((workout) => workout.toObject())
export const deleteWorkoutPlan = (id: string) => WorkoutPlanModel.findOneAndDelete({_id: id})
export const updateWorkoutPlan = (id: string, workoutPlan: WorkoutPlan) => WorkoutPlanModel.findByIdAndUpdate(id, workoutPlan)
