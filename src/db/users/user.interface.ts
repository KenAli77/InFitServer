export interface IUser {
    username: string,
    email: string,
    auth: {
        password: string,
        salt: string,
        sessionToken: string
    },
    onBoardingDone: boolean
}