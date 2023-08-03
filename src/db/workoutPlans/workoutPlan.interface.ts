import {WorkoutDocument} from "../workouts/workout";
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
    workouts:  Array<WorkoutDocument> | Array<string> ,
}