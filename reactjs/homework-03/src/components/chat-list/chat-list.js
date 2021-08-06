import {List, ListItem, Button, ListItemText, ListItemIcon} from '@material-ui/core';
import './chat-list.css';

export const ChatList = (props)=>{
    const chatsList = [
        {name:"City", id:0},
        {name:"Family", id:1},
        {name:"Schooll", id:2},
        {name:"GeekBrains", id:3}];

    return (
        <div className="chatsList">
    Some super mega text here!
            <List>
                {chatsList.map((itm)=>{
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