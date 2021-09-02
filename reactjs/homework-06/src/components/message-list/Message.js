// import { Input, withStyles } from '@material-ui/core';
// import { withRouter } from 'react-router-dom';
import './message-list.css';


// const InpStyles = withStyles(()=>({
//     root:{
//         background:"orange"
//     }
// }))(Input);

export function Message({author, text, ...rest}){
    console.log("REST", rest);
    return (
        <div className="chatMessage">
            <div className="messageNick">{author}</div>
            <div className="messageText">{text}</div>

            {/* <InpStyles/> */}
        </div>
    );
}

