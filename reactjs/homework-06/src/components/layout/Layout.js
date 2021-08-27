export const Layout = ({ header, chats, children }) =>{
  return (
    <div>
      <div >{header}</div>
      

      <div className="appColumns">
        <div>{chats}</div>
        <div >{children}</div>
      </div>
    </div>
  )
}
