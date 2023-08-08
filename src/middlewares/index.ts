import {NextFunction,Request,Response} from "express";
import {merge} from "lodash";
import {getUserBySessionToken} from "../db/users/users";

export const isAuthenticated = async (req: Request, res: Response ,next:NextFunction) => {

    try {
    const sessionToken = req.cookies["authToken"];

    if(!sessionToken){
        res.sendStatus(403)
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if(!existingUser){
        res.sendStatus(403)
    }

    merge(req,{identity:existingUser});

    return next()

    } catch (e) {
        console.log(e)
    }

}