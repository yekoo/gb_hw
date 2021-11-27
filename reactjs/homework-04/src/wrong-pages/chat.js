import { useEffect } from "react";
import {Switch, Route, useHistory} from "react-router-dom"
import { ChatList, MessageList } from "../components";
import { Layout } from "../components/layout/Layout.js"
import { MessageProvider } from "../components/message-provider"

export const Chat = ()=>{
    const {push} = useHistory();

    useEffect( ()=>{
        const listenExistChat = ({code})=>{
            if(code === "Escape"){
                push("/chat");
            }
        }
        
        document.addEventListener("keydown", listenExistChat)
        return ()=>{
            document.removeEventListener("keydown", listenExistChat)
        }
    }, [push])
    
    return (
        <Switch>
            <Route path={["/chat/:roomId", "/chat"]}>
                <MessageProvider>
                    {([state])=>{
                        <Layout chats={<ChatList {...state}/>}>
                            <Route path="/chat/:roomId">
                                <MessageList {...state}/>
                            </Route>
                            <Route exact={true} path="/chat">
                                <h1>Выберите сообщение </h1>
                            </Route>
                        </Layout>
                        }
                    }
                </MessageProvider>
            </Route>
            <Route path="*">
                <h1>Нет такого чата</h1>
            </Route>
        </Switch>
    )
}
