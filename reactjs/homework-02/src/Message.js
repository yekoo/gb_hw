import './Message.css';

export function Message(props) {
  return (
    <div className="message">
      <div className="messageAuthor">{props.author}</div>
        {props.text}
    </div>
  );
}
export default Message;