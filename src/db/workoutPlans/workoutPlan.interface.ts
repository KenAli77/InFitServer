import mongoose from "mongoose";
import {User} from "../users/user.interface";
import {Workout} from "../workouts/workout.interface";

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

export interface WorkoutPlan {
    userId: string | mongoose.Schema.Types.ObjectId,
    name: string,
    frequency: number[],
    difficulty: Difficulty,
    goal: Goal,
    duration: number,
    workouts: string[] | Workout[],
}