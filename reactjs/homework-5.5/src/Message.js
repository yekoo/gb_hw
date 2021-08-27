import './Message.css';

export function Message(props) {
  return (
    <div className="message">
      <div className="messageAuthor">{props.author}</div>
        {props.message}
    </div>
  );
}
export default Message;