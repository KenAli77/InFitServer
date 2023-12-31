import mongoose from "mongoose";
import {IUser} from "./user.interface";

export type UserDocument = mongoose.Document & IUser & {}

export const UserSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    auth: {
        password: {
            type: String,
            required: true,
            select: false
        },
        salt: {
            type: String,
            select: false
        },
        sessionToken: {
            type: String,
            select: false
        }
    },
    onBoardingDone:{
        type:Boolean,
        default: false
    }
})

export const UserModel = mongoose.model<UserDocument>('User',UserSchema)
/**
 * TODO abstract model functions
 */
export const getUsers = () => UserModel.find()
export const getUserByEmail = (email:string) => UserModel.findOne({email})
export const getUserBySessionToken = (token:string) => UserModel.findOne({'auth.sessionToken':token})
export const getUserById = (id:string) => UserModel.findById(id)
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user)=> user.toObject())
export const deleteUserById = (id:string) => UserModel.findOneAndDelete({_id:id})
export const updateUserById = (id:string,values:Record<string,any>) => UserModel.findByIdAndUpdate(id,values)
