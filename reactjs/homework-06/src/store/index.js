
import { createStore, combineReducers } from "redux"
import { profileReducer } from "./reducers"


export const store = createStore(
  combineReducers({
    profile: profileReducer,
  }),
)