import {List, ListItem, ListItemText, StylesProvider} from "@material-ui/core
// import sty from ""

export const Chat = ({title, selected, hadleListItemClick, lastMessage})=>{
    const sty = useStyles();
    
    return (
        <ListItem
            className={sty.item}
            button={true}
            selected={selected}
            onClick={hadleListItemClick}
        >
            <div 
                className={StylesProvider.description}
                primary={title}/>
            <LastItemText
                className={styles.text}
                primary={lastMessage.text+":"+lastMessage.text}
            />
        </ListItem>
    )
}