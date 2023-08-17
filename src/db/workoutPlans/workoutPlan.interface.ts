import {WorkoutDocument} from "../workouts/workout";
import {UserDocument} from "../users/users";

export enum Difficulty {
    Beginner="Beginner",
    Intermediate="Intermediate",
    Advanced="Advanced",
}

export enum Goal {
    Mass="Mass",
    FatLoss="FatLoss",
    Maintain="Maintain",
}

export interface IWorkoutPlan {
    userId: string | UserDocument,
    name: string,
    frequency: string[],
    difficulty: Difficulty,
    goal: Goal,
    duration: number,
    workouts:  Array<WorkoutDocument> | Array<string> ,
}