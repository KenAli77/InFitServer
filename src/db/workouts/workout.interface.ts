

export interface Workout {
    name: string,
    targetMuscleGroups: Muscle[],
    duration: number,
    dayOfWeek: number,
    exerciseItems: ExerciseItem[],

}

export interface ExerciseItem {
    exercise: Exercise;
    equipment: Equipment;
    volume: ExerciseVolume[];
    sets: number;
    duration: number;
}

export enum Exercise {
    Squat,
    BenchPress
}

export interface ExerciseVolume{
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