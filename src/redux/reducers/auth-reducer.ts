import { IUser } from "../types/user"
import { Dispatch } from "redux"
import { authApi } from "../../api/api"
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

export const loginTHnk = (email: string, password: string) => (dispatch : Dispatch) => {
    authApi.login({email, password}).then(response => {
        if(response.data.length === 0) {
            alert('invalid email or password')
        } else {
            dispatch(login({
                id: response.data[0].id,
                email: response.data[0].email,
                name: response.data[0].name
            }))
        }
    })
}


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
