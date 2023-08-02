import express from 'express'
import authentication from "./authentication";
import users from "./users";
import workoutPlan from "./workoutPlan";

const router = express.Router()

export default ():express.Router => {
    authentication(router)
    users(router)
    workoutPlan(router)
    return router
}