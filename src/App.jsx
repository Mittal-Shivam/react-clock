import { useState } from 'react'
import reactLogo from './logo.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  function currTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(currTime, 1000);

  return (
    <>
      <div>
        <a rel="noreferrer" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Clock</h1>
      <div className="container">
        <h1>{time}</h1>
        <button onClick={currTime}>
          Get Time
        </button>
      </div>
      <footer><p className="read-the-docs">
        Copyright © 2024
      </p></footer>
    </>
  )
}

export default App;
