import {Router} from "express";
import {isAuthenticated} from "../middlewares";
import {newWorkoutPlan, getWorkouts, editWorkoutPlan} from "../controllers/workoutPlan";


export default (router:Router) => {
    router.get('/api/workouts', isAuthenticated, getWorkouts)
    router.post('/api/workouts',isAuthenticated,newWorkoutPlan)
    router.put('/api/workouts/:id',isAuthenticated,editWorkoutPlan)
}

