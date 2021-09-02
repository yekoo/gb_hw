import {SEND_MESSAGE} from "../messages/types";
import {sendMessage} from "../messages";

export const cpuAnswer = (store)=>(next)=>(action)=>{
    if( action.type == SEND_MESSAGE && 
        action.payload.message.author!=="CPU"
    ){
        const roomId = action.payload.roomId;
        setTimeout(()=>{
        store.dispatch( sendMessage({
            author:"CPU",
            message:"middlewared answer~~~"
        },roomId) );
    }, 750);
        // return;
    }
    return next(action);
}