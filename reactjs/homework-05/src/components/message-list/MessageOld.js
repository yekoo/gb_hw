import './message-list.css';

export const Message = ({author, text})=>{

    return (
        <div className="chatMessage">
            <div className="messageNick">{author}</div>
            <div className="messageText">{text}</div>
        </div>
    );
}