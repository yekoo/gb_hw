import { 
  HANDLE_CHANGE_MESSAGE_VALUE, 
  CLEAR_MESSAGE_VALUE,
  ADD_NEW_ROOM,
  REMOVE_ROOM } from "./types"

const initialState = {
  conversations: [
    { title: "room1", value: "test value 1" },
    { title: "room2", value: "test value 2" },
  ],
}

const updateConversations = (state, roomId, value) =>
  state.conversations.map((conversation) => {
    return conversation.title === roomId
      ? { ...conversation, value }
      : conversation
  })

const createNewRoom = (state)=> {
  const lastNumber = +state.conversations[state.conversations.length-1].title.match(/\d+/)+1;
  const newRoomId = "room"+lastNumber;
  
  return [
    ...state.conversations,
    { title: newRoomId, value: "new room "+newRoomId+" created!" },
  ]
}
const deleteRoom = (state, roomId)=> {
  // state.conversations.find(elm=>elm.title)
  const chatIdxToDelete = state.conversations.findIndex((chat)=>chat.title===roomId)
  // console.log("Delete room with ID "+roomId+" - "+chatIdxToDelete);

  state.conversations.splice(chatIdxToDelete,1);
  return [
    ...state.conversations
  ]
}



export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        conversations: updateConversations(
          state,
          action.payload.roomId,
          action.payload.value,
        ),
      }
    case CLEAR_MESSAGE_VALUE:
      return {
        ...state,
        conversations: updateConversations(state, action.payload, ""),
      }
    case ADD_NEW_ROOM:
      const newRomId = "room" + (state.conversations.length+1);
      return {
        ...state,
        conversations: createNewRoom(state, newRomId),
      }
    case REMOVE_ROOM:
      return {
        ...state,
        conversations: deleteRoom(state, action.payload),
      }

    default:
      return state
  }
}


// export const addNewRom = (state, action)=>{
//   switch
// }