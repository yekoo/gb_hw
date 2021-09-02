import classNames from "classnames"
import "./message.css"

export function Message({ author, message }) {
  return (
    <div
      className="message" 
    >
      <h3>{message}</h3>
      <div className="messageProps">
        <p>{author}</p>
        <p>12.03</p>
      </div>
    </div>
  )
}