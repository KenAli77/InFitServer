import {Response} from "express";
import {Request} from "express";
import express from "express";
import {getUsers} from "../db/users";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.status(200).json(users).end()
    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
}