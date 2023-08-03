import {IWorkoutPlan} from "./workoutPlan.interface";
import WorkoutPlan from "./workoutPlan";
import {WorkoutService} from "../workouts/workout.service";
import workout, {WorkoutDocument} from "../workouts/workout";

export class WorkoutPlanService {

    static async createWorkoutPlan(workoutPlanData: IWorkoutPlan, userId: string) {
        return new Promise(async (resolve, reject) => {
            try {
                const workoutPlan = new WorkoutPlan()

                workoutPlan.name = workoutPlanData.name
                workoutPlan.frequency = workoutPlanData.frequency
                workoutPlan.difficulty = workoutPlanData.difficulty
                workoutPlan.goal = workoutPlanData.goal
                workoutPlan.duration = workoutPlanData.duration

                for (const workout of workoutPlanData.workouts) {

                    const upload = await WorkoutService.createWorkout(workout as WorkoutDocument, workoutPlanData.duration,workoutPlan._id)
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

    static async editWorkoutPlan() {
        return new Promise(async (resolve, reject) => {
            try{

            }catch (e) {
                console.log(e)
                reject(e)
            }
        })

    }

    static async getWorkoutPlanById() {
        return new Promise(async (resolve, reject) => {
            try {

            } catch (e) {
                console.log(e)
                reject(e)
            }
        })

    }

    static async deleteWorkoutPlan() {
        return new Promise(async (resolve, reject) => {
            try {

            } catch (e) {
                console.log(e)
                reject(e)
            }
        })

    }

    static async getWorkoutPlans() {
        return new Promise(async (resolve, reject) => {
            try {




            } catch (e) {
                console.log(e)
                reject(e)
            }
        })

    }

}