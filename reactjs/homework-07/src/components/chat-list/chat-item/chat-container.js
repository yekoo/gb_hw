import {ChatItem} from "./chat-item";

export function ChatContainer({ 
    title, 
    selected, 
    handleListItemClick, 
    chatDeleteHandle, 
    lastMessage,
    routeTo,
    deleteHandler}) {

    return (
        
        <ChatItem
            title={title}
            selected={selected}
            handleListItemClick={handleListItemClick}
            lastMessage={lastMessage}
            chatDeleteHandle={chatDeleteHandle}
            routeTo={routeTo}
            deleteHandler={deleteHandler}
        />
        
    )
}