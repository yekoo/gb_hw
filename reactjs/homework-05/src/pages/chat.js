import { useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import {Header} from "../components/header"
import { Layout } from "../components/layout/Layout.js"
import {MessageProvider} from "../components/message-provider/MessageProvider.js"
import {ChatList} from "../components/chat-list"
import {MessageList} from "../components/message-list"

    
  
//   ChatList,
//   MessageList,
// } from "../components/"


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
  }, [push])

  return (
    <Switch>
      <Route path={["/chat/:roomId", "/chat"]}>
        <MessageProvider>
          {([state, actions]) => (
            <Layout header={<Header/>} chats={<ChatList {...state} />}>
              <Route path="/chat/:roomId">
                <MessageList {...state} />
              </Route>
              <Route exact={true} path="/chat">
                <h1>выберите сообщение</h1>
              </Route>
            </Layout>
          )}
        </MessageProvider>
      </Route>
      <Route path="*">
        <h1>такого чата нет</h1>
      </Route>
    </Switch>
  )
}
//   return (
//     <Switch>
//       <Route path={["/chat/:roomId", "/chat"]}>
//         <MessageProvider>
//           {([state]) => (
//             <Layout header={<Header/>} chats={<ChatList {...state} />}>
//               <Route path="/chat/:roomId">
//                 <MessageList {...state} />
//               </Route>
//               <Route exact={true} path="/chat">
//                 <h1>выберите сообщение</h1>
//               </Route>
//             </Layout>
//           )}
//         </MessageProvider>
//       </Route>
//       <Route path="*">
//         <h1>такого чата нет</h1>
//       </Route>
//     </Switch>
//   )
// }
