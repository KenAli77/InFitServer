import {Request, Response} from "express";
import {get} from "lodash";
import {IUser} from "../db/users/user.interface";
import {createWorkoutPlan, getWorkoutPlans, updateWorkoutPlan} from "../db/workoutPlans/workoutPlan";
import {IWorkoutPlan} from "../db/workoutPlans/workoutPlan.interface";
import {WorkoutService} from "../db/workouts/workout.service";


export const fetchWorkoutPlans = async (req: Request, res: Response) => {
    try {

        const currentUser = get(req,'identity._id') as string
        const user = get(req,'identity') as IUser
        if(!currentUser){
            res.sendStatus(404)
        }

        const workoutPlans = await getWorkoutPlans(currentUser)

        for (const workoutPlan of workoutPlans) {
            workoutPlan.workouts = await WorkoutService.getWorkouts(workoutPlan._id)
        }

        console.log(user)

        res.status(200).json(workoutPlans).end()

    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
}

export const newWorkoutPlan = async (req: Request, res: Response) => {
    try {
        const userId = get(req,'identity._id') as string
        const user = get(req,'identity') as IUser
        if(!user){
         return res.sendStatus(404)
        }

        const workoutData = req.body as IWorkoutPlan

        if(!workoutData){
          return  res.sendStatus(400)
        }

        console.log(workoutData)

        const workoutPlan = await createWorkoutPlan(workoutData,userId)

        res.status(200).json({success:true,data:workoutPlan}).end()

    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
}

export const editWorkoutPlan = async (req: Request, res: Response) => {
    try {
        const userId = get(req,'identity._id') as string
        const user = get(req,'identity') as IUser
        if(!user){
           return  res.sendStatus(404)
        }
        const {id, workoutPlan} = req.body

        if(!id || !workoutPlan) {
          return  res.sendStatus(400)
        }

        const newWorkoutPlan = workoutPlan as IWorkoutPlan

        workoutPlan.userId = userId

        const editedWorkoutPlan = await updateWorkoutPlan(id,newWorkoutPlan)

        console.log(editedWorkoutPlan)

        res.status(200).json(newWorkoutPlan).end()

    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
}