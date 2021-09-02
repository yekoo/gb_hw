import { React, useEffect } from "react"
// import {useState } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import { Layout, ChatList, MessageList } from "../components"

import Modal from '@material-ui/core/Modal';

export function Chat() {
  const { push } = useHistory()

  useEffect(() => {
    const listenExistChat = ({ code }) => {
      if (code === "Escape") {
        push("/chat")
      }
    }

    document.addEventListener("keydown", listenExistChat)

    return () => {
      document.removeEventListener("keydown", listenExistChat)
    }
  }, [push]);

  // const [newRoomOpen, setnewRoomOpen] = useState(false);
  /*const handleNewRoomOpen = () => {
    setnewRoomOpen(true);
  };

  const handleNewRoomClose = () => {
    setnewRoomOpen(false);
  };*/

  return (
    <Switch>
      <Route path={["/chat/:roomId", "/chat"]}>
        <Layout chats={<ChatList />}>
          <Route path="/chat/:roomId">
            <MessageList />
          </Route>
          <Route exact={true} path="/chat">
            <h1>выберите чат</h1>
          </Route>

          {/*<Modal
            open={handleNewRoomOpen}
            onClose={handleNewRoomClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <h2>New chat room</h2>
            New chat name: <input type="text"></input>
          </Modal>*/}
        </Layout>
      </Route>
      <Route path="*">
        <h1>такого чата нет</h1>
      </Route>
    </Switch>
  )
}