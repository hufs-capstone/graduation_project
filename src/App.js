import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [current_time, setCurrentTime] = useState(0);

  useEffect(()=> {
    fetch('/time').then(res=> res.json()).then(data=>{
        console.log(data);
      setCurrentTime(data.time);
    });
    fetch('/product').then(res=>
            {
                console.log(res.json());
            });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is{current_time}</p>
        <p>product</p>
      </header>
    </div>
  );
}

export default App;
