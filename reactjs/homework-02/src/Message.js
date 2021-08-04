import './Message.css';

export function Message(props) {
  return (
    <div className="message">
        <h3>MegaMessage: </h3>
        {props.message}
    </div>
  );
}
export default Message;