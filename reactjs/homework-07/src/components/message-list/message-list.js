import { Input, InputAdornment, makeStyles } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import { useEffect, useRef, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import {
  handleChangeMessageValue} from "../../store/conversations"
import { sendMessage } from "../../store/messages"
import { sendMessageWithThunk } from "../../store/messages/thunks"
import { Message } from "./message"

import "./message-list.css"

const useStyles = makeStyles(() => {
  return {
    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: " 15px",
    },
  }
})
let botSetTimeoutId;

export const MessageList = () => {
  const s = useStyles()
  const { roomId } = useParams()

  const dispatch = useDispatch()

  const messages = useSelector((state) => {
    return state.messages.messages[roomId] || []
  })
  const value = useSelector((state) => {
    return (
      state.conversations.conversations.find(
        (conversation) => conversation.title === roomId,
      )?.value || ""
    )
  })

  const ref = useRef()

  const handleSendMessage = () => {
    if (value) {
      // dispatch(sendMessage({ author: "User", message: value }, roomId))
      dispatch(sendMessageWithThunk({ author: "User", message: value }, roomId))
    }
  }

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      handleSendMessage()
    }
  }

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight)
    }
  }, [messages])

  
  useEffect(() => {
    handleScrollBottom()
  }, [handleScrollBottom])

  return (
    <div className="chatBox">
      <div ref={ref} className="chatMessages">
        {messages.map((message, id) => (
          <Message key={id} {...message} />
        ))}
      </div>

      <div className="chatInputForm">
        <Input
          className={s.input}
          value={value}
          onChange={(e) =>
            dispatch(handleChangeMessageValue(e.target.value, roomId))
          }
          onKeyPress={handlePressInput}
          fullWidth={true}
          placeholder="Введите сообщение..."
          endAdornment={
            <InputAdornment position="end">
              {value && (
                <Send onClick={handleSendMessage} className="icon" />
              )}
            </InputAdornment>
          }
        />
      </div>
    </div>
  )
}