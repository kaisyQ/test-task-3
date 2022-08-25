import { IUser } from "../types/user"

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT' 


interface IAuthState {
    isAuth: boolean,
    user: IUser | null
}

interface IAuthAction {
    type?: string,
    user: IUser | null
}

const initialState = {
    isAuth: false,
    user: null
}

export const login = (user: IUser) => ({ type: LOGIN, user })
export const logout = () => ({ type: LOGOUT })

export default function authReducer (state: any = initialState, action : any ) {
    switch(action.type) {
        case LOGIN :
            return {
                ...state,
                isAuth: true,
                user: action.user
            }
        case LOGOUT :
            return {
                ...state,
                isAuth: false,
                user: null
            }
        default :
            return state
        }
}
