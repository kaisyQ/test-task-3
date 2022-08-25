import { createStore, combineReducers } from "redux"
import authReducer from "./reducers/auth-reducer"
import contactReducer from "./reducers/contacts-reducer"


const reducers = combineReducers({
        auth: authReducer,
        contacts: contactReducer
})

export const store = createStore(reducers)
