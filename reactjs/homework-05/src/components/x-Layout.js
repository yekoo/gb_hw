export const Layout = ({chats, messages})=>{
    return (
        <div className="appColumns">
            <div>{chats}</div>
            <div>{messages}</div>
        </div>
    )
}