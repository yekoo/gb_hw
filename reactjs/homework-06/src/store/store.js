import { createStore, combineReducers } from "redux";
import { TOGLE_NAME_VISIBLE } from "./types" 
// import { profileReducer } from "./profile"
export const store=createStore(combineReducers({
    profile:TOGLE_NAME_VISIBLE
}))
