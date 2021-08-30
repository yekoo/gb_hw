import { SEND_MESSAGE, DELETE_ALL_MESSAGE } from "./types"

const initialState = {
  messages: {
    room1: [{ id: new Date(), author: "Bot", message: "Hello from store 1" }],
    room2: [{ id: new Date(), author: "Bot", message: "Hello from store 2" }],
  },
}

export const messagesReducer = (state = initialState, action) => {
  // console.log("action? PAYLOAD:",action.payload);
  //  room21 ?
   switch (action.type) {   
    case SEND_MESSAGE:
      if(!state.messages[action.payload?.roomId]){
        state.messages[action.payload?.roomId]=[]
      }
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...state.messages[action.payload.roomId],
            { ...action.payload.message, id: new Date() },
          ],
        },
      }
    case DELETE_ALL_MESSAGE:
      delete state.messages[action.roomId]
      return state

    default:
      return state
  }
}