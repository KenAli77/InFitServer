import {IExerciseItem, IWorkout, Muscle} from "./workout.interface";
import Workout, {WorkoutDocument} from "./workout";


export class WorkoutService {
    static async createWorkout(data: IWorkout, duration: number,workoutPlanId:string):Promise<WorkoutDocument> {
        return new Promise(async (resolve, reject) => {
            try {
                const workout = new Workout()
                workout.name = data.name
                workout.exerciseItems = data.exerciseItems
                workout.targetMuscleGroups = data.targetMuscleGroups
                workout.dayOfWeek = data.dayOfWeek
                workout.duration = duration
                workout.workoutPlan = workoutPlanId
                await workout.save()

                resolve(workout)
            } catch (e) {
                reject(e)
            }
        })

    }
}