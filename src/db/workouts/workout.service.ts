import {IWorkout} from "./workout.interface";
import Workout, {WorkoutDocument} from "./workout";


export class WorkoutService {
    static async createWorkout(data: IWorkout, duration: number, workoutPlanId: string): Promise<WorkoutDocument> {
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

    static async getWorkoutById(id:string): Promise<WorkoutDocument> {
        return new Promise(async (resolve, reject) => {
            try {
                const workout = await Workout.findById(id)
                resolve(workout)
            } catch (e) {
                reject(e)
            }
        })
    }

    static async getWorkouts(workoutPlanId: string): Promise<Array<WorkoutDocument>> {
        return new Promise(async (resolve, reject) => {
            try {
                const workout = await Workout.find({workoutPlan: workoutPlanId})
                console.log("workout id",workoutPlanId)
                resolve(workout)
            } catch (e) {
                reject(e)
            }
        })
    }

    static async findWorkoutWithProp(prop: any): Promise<WorkoutDocument> {
        return new Promise(async (resolve, reject) => {
            try {
                const document = await Workout.findOne(prop)
                resolve(document)
            } catch (e) {
                reject(e)
            }
        })
    }

    static async editWorkout(workoutData: IWorkout,workoutId:string): Promise<WorkoutDocument> {
        return new Promise(async (resolve, reject) => {
            try {
                const workoutToEdit = await Workout.findById(workoutId)
                if(!workoutToEdit){
                    reject(Error("no document with given id"))
                }

                workoutToEdit.name = workoutData?.name
                workoutToEdit.workoutPlan = workoutData?.workoutPlan
                workoutToEdit.dayOfWeek = workoutData?.dayOfWeek
                workoutToEdit.targetMuscleGroups = workoutData?.targetMuscleGroups
                workoutToEdit.exerciseItems = workoutData?.exerciseItems
                workoutToEdit.duration = workoutData?.duration

                await workoutToEdit.save()

                resolve(workoutToEdit)
            } catch (e) {
                reject(e)
            }
        })
    }
}