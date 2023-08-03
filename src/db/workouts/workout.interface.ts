import {WorkoutPlanDocument} from "../workoutPlans/workoutPlan";


export interface IWorkout {
    name: string,
    targetMuscleGroups: Muscle[],
    duration: number,
    dayOfWeek: number,
    exerciseItems: IExerciseItem[],
    workoutPlan:string|WorkoutPlanDocument
}

export interface IExerciseItem {
    exercise: Exercise;
    equipment: Equipment;
    volume: IExerciseVolume[];
    sets: number;
    duration: number;
}

export enum Exercise {
    Squat,
    BenchPress
}

export interface IExerciseVolume {
    set:number,
    reps:number,
    weight:number,
}

export enum Equipment {
    Dumbbells,
    Barbell,
    KettleBell,
    BodyWeight,
    ResistanceBands,
    Machine ,
    SmithMachine,
    Rope,
    Cable,
}

export enum  Muscle {
    Biceps,
    Chest,
    Quads,
    Hamstrings,
    Triceps,
    Traps,
    Glutes,
    Calves,
    AnteriorDeltoids,
    PosteriorDeltoids,
    LateralDeltoids,
    Abs,
    Lats,
    Rhomboids,
    LowerBack,
}