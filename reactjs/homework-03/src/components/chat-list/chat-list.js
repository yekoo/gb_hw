import {List, ListItem, Button, ListItemText, ListItemIcon} from '@material-ui/core';
import './chat-list.css';

export const ChatList = (props)=>{
    return (
        <div className="chatsList">
  Some super mega text here!
        <List>
            {props.chats.map((itm)=>{
                return (
                <ListItem key={itm.id}>
                    <Button
                        variant="contained" 
                        color="primary">
                        {itm.name}</Button>
                </ListItem>
                )
            })
            }
        </List>
        </div>
    )
}