// import styles from "./layout.module.css"

export function Layout({ chats, children }) {
  return (
    <div >
      <div style={{display:"flex", justifyContent: "stretch", width:"100%"}}>
        <div >{chats}</div>
        <div style={{width: "100%"}}>{children}</div>
      </div>
    </div>
  )
}