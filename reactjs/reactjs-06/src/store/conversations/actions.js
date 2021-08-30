import { 
  HANDLE_CHANGE_MESSAGE_VALUE, 
  CLEAR_MESSAGE_VALUE,
  ADD_NEW_ROOM,
  REMOVE_ROOM } from "./types"

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
})

export const clearMessageValue = (roomId) => ({
  type: CLEAR_MESSAGE_VALUE,
  payload: roomId,
})


export const addNewRoom = (roomId) => ({
  type: ADD_NEW_ROOM,
  payload: roomId,
})
export const deleteRoom = (roomId) => ({
  type: REMOVE_ROOM,
  payload: roomId,
})