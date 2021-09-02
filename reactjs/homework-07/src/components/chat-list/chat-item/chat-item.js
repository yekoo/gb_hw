import {
     ListItem,
     ListItemIcon,
     ListItemText } from "@material-ui/core"
import { Link } from "react-router-dom"
import { AccountCircle } from "@material-ui/icons"
export const ChatItem = ({
     title, 
     key,
     selected, 
     handleListItemClick,
     lastMessage,
     routeTo,
     deleteHandler})=>{

     return (
          <div className="chatsListItem">
               <Link to={routeTo} key={key}>
               
                    <ListItem
                         // className={s.item}
                         key={key}
                         button={true}
                         selected={selected}
                         onClick={handleListItemClick}
                    >
                         <ListItemIcon>
                         <AccountCircle fontSize="large" className="icon" />
                         </ListItemIcon>
                         <div className="description">
                         <ListItemText className="text" primary={title} />
                         {lastMessage && (
                              <ListItemText
                              className="text"
                              primary={`${lastMessage.author}: ${lastMessage.message}`}
                              />
                         )}
                         <ListItemText className="text" primary="12.30" />
                         </div>
                         
                    </ListItem>

               </Link>
               <div 
                    className="deleteButton"
                    onClick={deleteHandler}
                    >&times;</div>
          </div>
          )
}