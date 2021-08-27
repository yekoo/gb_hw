import { List } from "@material-ui/core"
import { memo } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Chat } from "./chat"
import { Link } from "react-router-dom"


const selector = (state) => {
  return state.conversations.conversations
}

export const ChatList = memo(() => {
  const { roomId } = useParams()
  const conversations = useSelector(selector)

  return (
    <List component="nav">
      {conversations.map((chat, index) => {
        return (
          <Link key={index} to={`/chat/${chat.title}`}>
            <Chat
                key={index}
                title={chat.title}
                selected={roomId === chat.title}
            />
          </Link>
        )
      })}
    </List>
  )
})