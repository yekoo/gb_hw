import { List, Button } from "@material-ui/core"
import { memo } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
// import { Chat } from "./chat"
// import { Link } from "react-router-dom"
import "./chat-list.css"

import {ChatContainer} from "./chat-item"

import { sendMessage, deleteAllMessages } from "../../store/messages"
import {
  addNewRoom,
  deleteRoom, 
} from "../../store/conversations"


const conversationSelector = (state) => {
  return state.conversations.conversations
}


export const ChatList = memo(() => {
  const { roomId } = useParams()
  const conversations = useSelector(conversationSelector)
  
  const dispatch = useDispatch()

  const addNewChat = (e)=>{
    const newRoomId = "room"+conversations.length+1;
    // console.log("Show modal about new chat add", newRoomId);
    dispatch(addNewRoom({roomId:newRoomId}))
    dispatch(sendMessage({ author: "CPU", message: "Hello"}, newRoomId))
  }

  const chatDeleteHandle = (roomId)=>{
    dispatch(deleteRoom(roomId))
    dispatch(deleteAllMessages(roomId))
  }
  

  return (
    <div className="chatsList">
    <List component="nav">
      {conversations.map((chat, index) => {

        return (
            <ChatContainer
              routeTo={`/chat/${chat.title}`}
              title={chat.title}
              selected={roomId === chat.title}
              deleteHandler={()=>chatDeleteHandle(chat.title)}
            />
          )
        
      })}
    </List>

    <div className="chatListPanel">
      <Button
        variant="contained" 
        color="primary"
        onClick={addNewChat}
        >
        Add Chat
      </Button>
    </div>
    </div>
  )
})