import mongoose from "mongoose";
import {Equipment, Exercise, IExerciseVolume, IWorkout, Muscle} from "./workout.interface";


export type WorkoutDocument = mongoose.Document & IWorkout & {}

const WorkoutSchema = new mongoose.Schema<IWorkout>({
    name: {type: String},
    targetMuscleGroups: [{type: Number, enum: Object.values(Muscle)}],
    duration: {type: Number},
    dayOfWeek: [{type: Number}],
    exerciseItems: [{
        exercise: {type: Number, enum: Object.values(Exercise)},
        equipment: {type: Number, enum: Object.values(Equipment)},
        volume: [{set: {type: Number}, reps: {type: Number}, weight: {type: Number}}],
        sets: {type: Number},
        duration: {type: Number}
    }]
})

const WorkoutModel = mongoose.model<WorkoutDocument>('Workout', WorkoutSchema);

export default WorkoutModel;
