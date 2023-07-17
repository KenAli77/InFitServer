import {Response, Router} from "express";
import {Request} from "express";
import express from "express";
import {getAllUsers} from "../controllers/users";
import {isAuthenticated} from "../middlewares";

export default (router:Router) => {
    router.get('/users', isAuthenticated,getAllUsers);
}