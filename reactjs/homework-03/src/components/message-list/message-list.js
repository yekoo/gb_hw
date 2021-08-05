import {useState, useEffect, useRef} from 'react'
import {Message} from '../../Message';
import {Button, Input, InputAdornment} from '@material-ui/core';
import './message-list.css';
export const MessageList = ()=>{
    const [messages, setMessage] = useState([
    ]);
    const [value, setValue] = useState("");
  
    const inpField = useRef(null);
    const listBottom = useRef(null);
  
    const addNewMessage = (e)=>{
      setMessage((allMessages)=>[...allMessages, {message:value, author:"Mike"}] )
      setValue("");
    }
    const handleSubmitMessage = ({code})=>{
      // console.log(code);
      if(code=="Enter"){
        setMessage((allMessages)=>[...allMessages, {message:value, author:"Mike"}] )
        setValue("");
        console.log("SCROLL!")
        // listBottom.current.scrollIntoView({behaviour:"smooth"})
      }
    }
  
    useEffect(()=>{
      if(messages.length && messages[messages.length-1]?.author !=="CPU"){
        setTimeout(()=>{
          setMessage((allMessages)=>[...allMessages, {message:"Ok, and what?", author:"CPU"}]);
          inpField.current.focus();
          listBottom.current.scrollIntoView({behaviour:"smooth"})
        },
          Math.random()*1000+1000);
        }
        listBottom.current.scrollIntoView({behaviour:"smooth"})
        
      }, [messages, '']);
  
    useEffect(()=>{
      inpField.current.focus();
      console.log("page opened! ",inpField);
    }, []);
    return (
          <main>
            <div className="currentChat">
              {messages.map(
                (msg, idx) => {return (<Message text={msg.message} author={msg.author}key={idx}/>)}
              )}
              <div ref={listBottom}></div>
            </div>
            <div className="chatForm">
              <Input color="primary" 
                inputRef={inpField} 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                onKeyPress={handleSubmitMessage} 
                fullWidth={true}
                startAdornment={
                  <InputAdornment position="start">&gt;</InputAdornment>
                }
                endAdornment={<InputAdornment position="end">
                  <Button 
                    onClick={addNewMessage} 
                    variant="contained" 
                    color="primary">Add message</Button>
                </InputAdornment>}/>
              
              </div>
            </main>
    );
}