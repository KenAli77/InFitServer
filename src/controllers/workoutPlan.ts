import {Request, Response} from "express";
import {get} from "lodash";
import {User} from "../db/users/user.interface";
import {createWorkoutPlan, getWorkoutById, updateWorkoutPlan} from "../db/workoutPlans/workoutPlans";
import {WorkoutPlan} from "../db/workoutPlans/workoutPlan.interface";


export const getWorkouts = async (req: Request, res: Response) => {
    try {

        const currentUser = get(req,'identity._id') as string
        const user = get(req,'identity') as User
        if(!currentUser){
            res.sendStatus(404)
        }

        const workouts = await getWorkoutById(currentUser)

        console.log(user)

        res.status(200).json(workouts).end()

    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
}

export const newWorkoutPlan = async (req: Request, res: Response) => {
    try {
        const userId = get(req,'identity._id') as string
        const user = get(req,'identity') as User
        if(!user){
         return res.sendStatus(404)
        }

        const workoutData = req.body as WorkoutPlan

        if(!workoutData){
          return  res.sendStatus(400)
        }

        console.log(workoutData)

        workoutData.workouts.forEach(()=>{

        })

        workoutData.userId = userId

        console.log(workoutData)

        const workoutPlan = await createWorkoutPlan(workoutData)

        res.status(200).json(workoutPlan).end()

    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
}

export const editWorkoutPlan = async (req: Request, res: Response) => {
    try {
        const userId = get(req,'identity._id') as string
        const user = get(req,'identity') as User
        if(!user){
           return  res.sendStatus(404)
        }
        const {id, workoutPlan} = req.body

        if(!id || !workoutPlan) {
          return  res.sendStatus(400)
        }

        const newWorkoutPlan = workoutPlan as WorkoutPlan

        workoutPlan.userId = userId

        const editedWorkoutPlan = await updateWorkoutPlan(id,newWorkoutPlan)

        console.log(editedWorkoutPlan)

        res.status(200).json(newWorkoutPlan).end()

    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
}