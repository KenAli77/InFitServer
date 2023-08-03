import mongoose from "mongoose";
import {IUser} from "../users/user.interface";
import {IWorkout} from "../workouts/workout.interface";
import {WorkoutPlanDocument} from "./workoutPlans";
import {WorkoutDocument} from "../workouts/workouts";
import {UserDocument} from "../users/users";

export enum Difficulty {
    Beginner,
    Intermediate,
    Advanced,
}

export enum Goal {
    Mass,
    FatLoss,
    Maintain,
}

export interface IWorkoutPlan {
    userId: string | UserDocument,
    name: string,
    frequency: number[],
    difficulty: Difficulty,
    goal: Goal,
    duration: number,
    workouts: Array<string> | Array<WorkoutDocument>,
}