import mongoose from "mongoose";
import {Difficulty, Goal, IWorkoutPlan} from "./workoutPlan.interface";
import {WorkoutPlanService} from "./workoutplan.service";


export type WorkoutPlanDocument = mongoose.Document & IWorkoutPlan & {}

const WorkoutPlanSchema = new mongoose.Schema<IWorkoutPlan>({
    name: {type: String},
    frequency: [{type: String}],
    difficulty: {type: String},
    goal: {type: String},
    duration: {type: Number},
    workouts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Workout'}],
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const WorkoutPlanModel = mongoose.model<WorkoutPlanDocument>('WorkoutPlan', WorkoutPlanSchema);

export default WorkoutPlanModel;

export const getWorkoutPlans = (userId: string) => WorkoutPlanService.getWorkoutPlans(userId)
export const getWorkoutById = (id: string) => WorkoutPlanService.getWorkoutPlanById(id)
export const createWorkoutPlan = (workoutPlan: IWorkoutPlan, userId: string) => WorkoutPlanService.createWorkoutPlan(workoutPlan, userId)
export const deleteWorkoutPlan = (id: string) => WorkoutPlanService.deleteWorkoutPlan(id)
export const updateWorkoutPlan = (id: string, workoutPlan: IWorkoutPlan) => WorkoutPlanService.editWorkoutPlan(id, workoutPlan)
