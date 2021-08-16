import './App.css';
// import { MessageList, ChatList } from './components';
import {makeStyles} from '@material-ui/core';

import {RouterWays} from "./RouterWays.js";




// import {ControlPoint} from '@material-ui/icons';
const useStyle = makeStyles(theme=>{
  console.log(theme);
  return {
    root:{
      color: theme.green.color
    }
  }
})
export const App = (props) =>{
  const classes = useStyle();
  // return null;
  return (
    <div className={classes.root} >
      <header className="App-header">
        {/* <div className={"appColumns"}>
          <ChatList />
          <MessageList/>
        </div> */}
        <RouterWays/>
      </header>
    </div>
  )
}

export default App;





