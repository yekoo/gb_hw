import React, { useState } from 'react';
import {List, ListItem, Button, ListItemText, ListItemIcon} from '@material-ui/core';
import { Link } from 'react-router-dom';

import './chat-list.css';

export const ChatList = ({conversations, allMessages})=>{
    // const [chatsList] = useState(["City","Family","Hospital","GeekBrains"]);
    // const chatsList2 = [
    //     {name:"City", id:0},
    //     {name:"Family", id:1},
    //     {name:"Hospital", id:2},
    //     {name:"GeekBrains", id:3}];
    

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className="chatsList">
            <List component="nav" >
                {conversations.map((itm, idx)=>{
                    const currentMessages = allMessages[itm.title];
                    return (
                    <Link to={"/chat/"+itm.title}>
                        <ListItem key={idx}  
                            button
                            title="itm.title"
                            onClick={(event) => handleListItemClick(event, idx)}
                            selected={selectedIndex===idx}
                        >
                            
                            <ListItemText primary={itm.title} />
                                
                        </ListItem>
                    </Link>
                    )
                })
                }
            </List>
        </div>
    )
}