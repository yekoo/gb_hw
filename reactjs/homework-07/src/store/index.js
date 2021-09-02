import { createStore, combineReducers, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { conversationsReducer } from "./conversations"
import { messagesReducer } from "./messages"
import { profileReducer } from "./profile"
import { report, logger, timeoutSheduler } from "./middlewares"
// import { cpuAnswer } from "./middlewares"

const persistCfg = {
  key:"root",
  storage,
  blacklist:["conversations","messages"]
}

export const persistreducer = persistReducer(persistCfg, combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer
  }))

export const store = createStore(
    persistreducer,
  compose(
    applyMiddleware(report, thunk, logger, timeoutSheduler),
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__() : 
    (args)=>args
  )
);

export const persiststore = persistStore(store)
// const mw = store => next => action => {}
