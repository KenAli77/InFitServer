import {NextFunction,Request,Response} from "express";
import {merge} from "lodash";
import {getUserBySessionToken} from "../db/users/users";

export const isAuthenticated = async (req: Request, res: Response ,next:NextFunction) => {

    try {
    const sessionToken = req.cookies["authToken"];

    console.log(req.cookies)
    if(!sessionToken){
        next(Error("missing session token"))

    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if(!existingUser){
        console.log("user not found",sessionToken)
        next(Error("user not found"))
    }

    merge(req,{identity:existingUser});

    return next()

    } catch (e) {
        console.log(e)
    }

}