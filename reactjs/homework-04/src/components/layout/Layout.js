export const Layout = ({ header, chats, children }) =>{
  return (
    <div>
      <div >{header}</div>

      <div className="appColumns">
          <div>{header}</div>
        <div>{chats}</div>
        <div >{children}</div>
      </div>
    </div>
  )
}
