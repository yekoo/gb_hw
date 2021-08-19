import { useState, useMemo } from "react";
import { useParams } from "react-router";

export function MessageProvider({children}){
    const {roomId} = useParams();

    const [conversations] = useState([
        {title: "room1", value:""},
        {title: "room2", value:""},
        {title: "room3", value:""}
    ]);
    
    const [messages] = useState({
        room1:[{text:"Hi", author:"Theodore", date:new Date()}],
        room2:[{text:"Hight", author:"Fedor", date:new Date()}],
        room3:[{text:"Top", author:"Fedor", date:new Date()}],
    });

    const state = useMemo(()=>{
        return {
            conversations,
            allMessages: messages,
            messages: messages[roomId] || [],
            value: conversations.find( (conversation)=>conversation.title===roomId)
            ?.value || ""
        }
    }, [conversations, messages, roomId]);


    /*const state = useMemo(()=>{
        conversations,
        messages: messages[roomId] || [],
        value: conversations.find(conversation=>conversation.title===roomId)
            ?.value || ""
    };*/
    
    const actions = useMemo(()=>{
        return{
            sendMessage:()=>{
                console.log("actions: sendMessage");
            },
            handleChangeValue:()=>{
                console.log("actions: handleChangeValue");

            }
        }
    }, []);

    return children([state, actions]);
}