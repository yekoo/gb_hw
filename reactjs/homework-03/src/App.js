import './App.css';
import { MessageList, ChatList } from './components';


// import {ControlPoint} from '@material-ui/icons';

export const App = (props) =>{
  // return null;
  return (
    <div className="App" >
      <header className="App-header">
        <div className="appColumns">
          <ChatList chats={[
            {name:"City", id:0},
            {name:"Family", id:1},
            {name:"Schooll", id:2},
            {name:"GeekBrains", id:3},
          ]}/>
          <MessageList/>
        </div>
      </header>
    </div>
  )
}

export default App;
