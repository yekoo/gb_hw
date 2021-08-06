import './App.css';
import { MessageList, ChatList } from './components';


// import {ControlPoint} from '@material-ui/icons';

export const App = (props) =>{
  // return null;
  return (
    <div className="App" >
      <header className="App-header">
        <div className="appColumns">
          <ChatList/>
          <MessageList/>
        </div>
      </header>
    </div>
  )
}

export default App;
