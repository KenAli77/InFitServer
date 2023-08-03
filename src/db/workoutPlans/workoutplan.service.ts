import {IWorkoutPlan} from "./workoutPlan.interface";
import WorkoutPlan, {WorkoutPlanDocument} from "./workoutPlan";
import {WorkoutService} from "../workouts/workout.service";
import workout, {WorkoutDocument} from "../workouts/workout";
import {newWorkoutPlan} from "../../controllers/workoutPlan";

export class WorkoutPlanService {

    static async createWorkoutPlan(workoutPlanData: IWorkoutPlan, userId: string): Promise<WorkoutPlanDocument> {
        return new Promise(async (resolve, reject) => {
            try {
                const workoutPlan = new WorkoutPlan()

                Object.assign(workoutPlan,workoutPlanData)

                for (const workout of workoutPlanData.workouts) {
                    const upload = await WorkoutService.createWorkout(workout as WorkoutDocument, workoutPlanData.duration, workoutPlan._id)
                    workoutPlan.workouts.push(upload._id)
                }

                workoutPlan.userId = userId

                await workoutPlan.save()

                resolve(workoutPlan)
            } catch (e) {
                console.log(e)
                reject(e)
            }
        })
    }

    static async editWorkoutPlan(id: string, workoutPlan: IWorkoutPlan) {
        return new Promise(async (resolve, reject) => {
            try {

                const workoutPlanToEdit = await WorkoutPlan.findById(id)

                if(workoutPlanToEdit){
                    Object.assign(workoutPlanToEdit,workoutPlan)
                } else {
                    reject(Error("no document with given id"))
                }

                await workoutPlanToEdit.save()

                resolve(workoutPlanToEdit)

            } catch (e) {
                console.log(e)
                reject(e)
            }
        })

    }

    static async getWorkoutPlanById(id: string) {
        return new Promise(async (resolve, reject) => {
            try {
                const workoutPlan = await WorkoutPlan.findById(id)

                if (!workoutPlan) {
                    reject(Error("no document with given id"))
                }

                resolve(workoutPlan)
            } catch (e) {
                console.log(e)
                reject(e)
            }
        })

    }

    static async deleteWorkoutPlan(id: string) {
        return new Promise(async (resolve, reject) => {
            try {
                const deleteOperation = await WorkoutPlan.findByIdAndDelete(id)
                resolve(deleteOperation)
            } catch (e) {
                console.log(e)
                reject(e)
            }
        })
    }

    static async getWorkoutPlans(userId: string): Promise<Array<WorkoutPlanDocument>> {
        return new Promise(async (resolve, reject) => {
            try {
                const workoutPlans = await WorkoutPlan.find({userId: userId})
                resolve(workoutPlans)
            } catch (e) {
                console.log(e)
                reject(e)
            }
        })
    }

    static async findWorkoutPlanWithProp(prop: any): Promise<WorkoutPlanDocument> {
        return new Promise(async (resolve, reject) => {
            try {
                const document = WorkoutPlan.findOne(prop)
                resolve(document)
            } catch (e) {
                reject(e)
            }
        })
    }

}