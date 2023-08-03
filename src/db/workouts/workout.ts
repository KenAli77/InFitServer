import mongoose from "mongoose";
import {Equipment, Exercise, IExerciseVolume, IWorkout, Muscle} from "./workout.interface";


export type WorkoutDocument = mongoose.Document & IWorkout & {}

const WorkoutSchema = new mongoose.Schema<IWorkout>({
    name: {type: String},
    targetMuscleGroups: [{type: Number}],
    duration: {type: Number},
    dayOfWeek: [{type: Number}],
    exerciseItems: [{
        exercise: {type: Number},
        equipment: {type: Number},
        volume: [{set: {type: Number}, reps: {type: Number}, weight: {type: Number}}],
        sets: {type: Number},
        duration: {type: Number}
    }],
    workoutPlan:{type: mongoose.Schema.Types.ObjectId, ref: 'Workout'}
})

const WorkoutModel = mongoose.model<WorkoutDocument>('Workout', WorkoutSchema);

export default WorkoutModel;
