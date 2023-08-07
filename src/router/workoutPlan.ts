import {Router} from "express";
import {isAuthenticated} from "../middlewares";
import {newWorkoutPlan, editWorkoutPlan, fetchWorkoutPlans} from "../controllers/workoutPlan";


export default (router:Router) => {
    router.get('/api/app/workoutPlan', isAuthenticated, fetchWorkoutPlans)
    router.post('/api/app/workoutPlan',isAuthenticated,newWorkoutPlan)
    router.put('/api/app/workoutPlan/:id',isAuthenticated,editWorkoutPlan)
}

