import { useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import {Header} from "../components/header"
import { Layout } from "../components/layout/Layout.js"
import {MessageProvider} from "../components/message-provider/MessageProvider.js"
import {ChatList} from "../components/chat-list"
import {MessageList} from "../components/message-list"
import { makeStyles } from "@material-ui/core"
import { NavBar } from "../components/NavBar"

    
  
//   ChatList,
//   MessageList,
// } from "../components/"

const useStyles = makeStyles((theme)=>{
  return {
    item:{
      "&.Mui-selected":{
        backgroundColor: theme.color,
      },
      "&.Mui-selected:hover":{
        backgroundColor: "#2b5278"
      }
    }
  }
})


export function Chat({title, selected, handleListItemClick, lastMessage}) {
  const s = useStyles();
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
            <Layout  chats={<ChatList {...state} />}>
              <Route path="/chat/:roomId">
                <MessageList {...state} {...actions}/>
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
