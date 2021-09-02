import { clearMessageValue } from "../conversations";
import {sendMessage} from "./actions"

export const sendMessageWithThunk = (message, roomId)=>(dispatch)=>{
    dispatch(sendMessage(message, roomId));
    // throw Error("bug here!")
    dispatch(clearMessageValue(roomId))

    if(message.author!=="CPU"){
        setTimeout(
            ()=>dispatch(
                sendMessage(
                    {author:"CPU", message:"Another CPU answer... after little thunk"}, 
                    roomId )
                )
            , 1500
        )
    }
}