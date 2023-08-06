import {Router} from "express";
import {isAuthenticated} from "../middlewares";
import {newWorkoutPlan, editWorkoutPlan, fetchWorkoutPlans} from "../controllers/workoutPlan";


export default (router:Router) => {
    router.get('/api/workouts', isAuthenticated, fetchWorkoutPlans)
    router.post('/api/workouts',isAuthenticated,newWorkoutPlan)
    router.put('/api/workouts/:id',isAuthenticated,editWorkoutPlan)
}

