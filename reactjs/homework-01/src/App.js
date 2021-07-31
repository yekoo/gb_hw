import Message from './Message';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Message message={props.message}/>
      </header>
      

    </div>
  );
}

export default App;
