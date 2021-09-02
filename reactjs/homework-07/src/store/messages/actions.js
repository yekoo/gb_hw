import { SEND_MESSAGE, DELETE_ALL_MESSAGE} from "./types"

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
  meta: {delay:500}
})
export const sendMessageWithThunk = 
  (message, roomId)=>(dispatch, getState)=>{
    dispatch(sendMessage(message, roomId))

    if(message.author !== "CPU"){
      setTimeout(() => dispatch(sendMessage({
        author:"CPU", message:"Machine thuught"}, roomId), 1500))
    }
}


export const deleteAllMessages = (roomId)=>({
  type: DELETE_ALL_MESSAGE,
  roomId
});