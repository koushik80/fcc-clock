import * as React from 'react';
import logo from './logo.png';
import './index.css';
import './design.js';

const App = () => {
  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);
  const { handleBreakIncrease, handleBreakDecrease, handleSessionIncrease, handleSessionDecrease, title, handlePlay, handleReset, play, timeFormatter = () => "25:00" } = {}
  return (
    <div className="App">
      <header className="App-header">
       <div className='logo'>
         <div className='inner-logo'>devHuß
           <img src={logo} className="App-logo" alt="logo" />
         </div>
       </div>
      </header>
      <div className="background">
      <div className="wrapper">
      <h2>25 + 5 Clock</h2>
      <div className="break-session-length">
        <div>
          <h3 id="break-label">Break Length</h3>
          <div>
            <button disabled={play} onClick={handleBreakIncrease} id="break-increment">Increase</button>
              <strong id="break-length">{breakLength}</strong>
            <button disabled={play} onClick={handleBreakDecrease} id="break-decrement">Decrease</button>
          </div>
         </div>
         <div>
           <h3 id="session-label">Session Length</h3>
           <div>
            <button disabled={play} onClick={handleSessionIncrease} id="session-increment">Increase</button>
              <strong id="session-length">{sessionLength}</strong>
            <button disabled={play} onClick={handleSessionDecrease} id="session-decrement">Decrease</button>
          </div>
         </div>
      </div>
      <div className="timer-wrapper">
        <div className="timer">
           <h2 id="timer-label">{title}</h2>
           <h3 id="time-left">{timeFormatter()}</h3>
        </div>
        <button onClick={handlePlay} id="start_stop">Start/Stop</button>
        <button onClick={handleReset} id="reset">Reset</button>
      </div>
    </div>
    <audio
      id="beep"
      preload="auto"
      src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
        </div>
    </div>);
}

export default App;
