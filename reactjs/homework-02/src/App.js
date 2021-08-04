import './App.css';
import {useState, useEffect, state} from 'react'
import {Message} from './Message';

export const App = (props) =>{
  const [messages, setMessage] = useState([
  ]);
  const [value, setValue] = useState("");

  const addNewMessage = (e)=>{
    setMessage((allMessages)=>[...allMessages, {message:value, author:"Mike"}] )
    setValue("");
  }

  useEffect(()=>{
    if(messages.length && messages[messages.length-1]?.author !=="CPU"){
      setTimeout(()=>{
        setMessage((allMessages)=>[...allMessages, {message:"Ok, and what?", author:"CPU"}] )},
        Math.random()*1500);
      }
    }, [messages]);

  useEffect(()=>{
    console.log("page opened!");
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <ul className="chatList">
          {messages.map(
            (msg, idx) => {return (<Message text={msg.message} author={msg.author}key={idx}/>)}
          )}
        </ul>

        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={addNewMessage}>Add message</button>

      </header>
    </div>
  );
}

export default App;
