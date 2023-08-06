import express from 'express'
import {createUser, getUserByEmail} from "../db/users/users";
import {authentication, random} from "../helpers";

export const register = async (req: express.Request, res: express.Response) => {

    try {

        const {email, password, username} = req.body

        if (!email || !password || !username) {
            return res.sendStatus(400)
        }

        const existingUser = await getUserByEmail(email)

        if (existingUser) {
            /**
             * TODO custom error class
             */
            console.log("email already registered")
            return res.sendStatus(400)
        }

        const salt = random()

        const user = await createUser({
            email: email,
            username: username,
            auth: {
                salt: salt,
                password: authentication(salt, password)
            },
        })

        return res.status(200).json(user).end()

    } catch (e) {
        console.log(e)
        return res.sendStatus(400)
    }

}

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const {email,password} = req.body

        if(!email || !password){
            console.log("missing field")
            return res.sendStatus(400)
        }

        // selecting salt and psw since they're not selected by default
        const user = await getUserByEmail(email).select('+auth.salt + auth.password')

        if(!user){
            console.log("user not registered")
            return res.sendStatus(400)
        }

        const expectedHash = authentication(user.auth.salt,password)

        if(user.auth.password !== expectedHash){
            return res.sendStatus(403)
        }

        const salt = random()
        user.auth.sessionToken = authentication(salt,user._id.toString())

        await user.save()

        res.cookie("authToken",user.auth.sessionToken, {domain:'localhost',path:'/'})

        return res.status(200).json({success:true,authToken:user.auth.sessionToken,id:user._id}).end()

    } catch (e) {
        console.log(e)
        return res.sendStatus(400)
    }
}