import mongoose from "mongoose";
import {User} from "../users/user.interface";

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
    userId: string | User,
    name: string,
    frequency: number[],
    difficulty: Difficulty,
    goal: Goal,
    duration: number,
    workouts: string[],
}