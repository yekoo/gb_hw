import { SEND_MESSAGE, DELETE_ALL_MESSAGE} from "./types"

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
})
export const deleteAllMessages = (roomId)=>({
  type: DELETE_ALL_MESSAGE,
  roomId
});