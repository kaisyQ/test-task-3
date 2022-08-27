import { createStore, combineReducers, applyMiddleware } from "redux"
import authReducer from "./reducers/auth-reducer"
import contactReducer from "./reducers/contacts-reducer"
import thunk from "redux-thunk"

const reducers = combineReducers({
        auth: authReducer,
        contacts: contactReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))
