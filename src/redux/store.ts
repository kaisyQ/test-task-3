import { createStore, combineReducers } from "redux"
import authReducer from "./reducers/auth-reducer"

const store = createStore(combineReducers(authReducer))