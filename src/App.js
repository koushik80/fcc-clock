import * as React from 'react';
import logo from './logo.png';
import './index.css';
import './design.js';



const App = () => {
  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);
  const [timeLeft, seTtimeLeft] = React.useState(1500);
  const [timingType, setTimingtype] = React.useState("SESSION");
  const [play, setPlay] = React.useState(false);

  const timeout = setTimeout(() => {
    if(timeLeft && play){
      seTtimeLeft(timeLeft - 1)
    }
  }, 1000);

  const handleBreakIncrease = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
  }
const handleBreakDecrease = () => {
    if(breakLength > 1){
      setBreakLength(breakLength - 1)
    }
  }

   const handleSessionIncrease = () => {
    if(sessionLength < 60){
      setSessionLength(sessionLength + 1)
      seTtimeLeft(timeLeft + 60)
    }
  }

  const handleSessionDecrease = () => {
    if(sessionLength > 1){
      setSessionLength(sessionLength - 1)
      seTtimeLeft(timeLeft - 60)
    }
  }

  const handleReset = () => {
    clearTimeout(timeout);
    setPlay(false);
    seTtimeLeft(1500);
    setBreakLength(5);
    setSessionLength(25);
    setTimingtype("SESSION");
    const audio = document.getElementById("beep");
    audio.pause()
    audio.currentTime = 0;
  }

  const handlePlay = () => {
    clearTimeout(timeout);
    setPlay(!play);
  }

  const resetTimer = () => {
    const audio = document.getElementById("beep");
    if(!timeLeft && timingType === "SESSION"){
      seTtimeLeft(breakLength * 60)
      setTimingtype("BREAK")
      audio.play()
    }
    if(!timeLeft && timingType === "BREAK"){
      seTtimeLeft(sessionLength * 60)
      setTimingtype("SESSION")
      audio.pause()
      audio.currentTime = 0;
    }
  }

  const clock = () => {
    if (play) {
    timeout
    resetTimer()
  } else {
    clearTimeout(timeout)
  }
  }

  React.useEffect(() => {
    clock()
  }, [play, timeLeft, timeout])

  const timeFormatter = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const title = timingType === "SESSION" ? "Session" : "Break";

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
    <h2>
      <span className="title-word title-word-1">25</span>
      <span className="title-word title-word-2">  +  </span>
      <span className="title-word title-word-3">5 </span>
      <span className="title-word title-word-4"> Clock</span>
    </h2>
      <div className="break-session-length">
        <div>
          <h3 id="break-label">Break Length</h3>
          <div className='button-break'>
            <button disabled={play} onClick={handleBreakIncrease} id="break-increment">+</button>
              <strong id="break-length">{breakLength}</strong>
            <button disabled={play} onClick={handleBreakDecrease} id="break-decrement">-</button>
          </div>
         </div>
         <div>
           <h3 id="session-label">Session Length</h3>
         <div className='button-session'>
            <button disabled={play} onClick={handleSessionIncrease} id="session-increment">+</button>
              <strong id="session-length">{sessionLength}</strong>
            <button disabled={play} onClick={handleSessionDecrease} id="session-decrement">-</button>
          </div>
         </div>
      </div>
      <div className="timer-wrapper">
        <div className="timer">
           <h1 className="session-timer" id="timer-label">{title}</h1>
           <h3 className="session-formatter" id="time-left">{timeFormatter()}</h3>
            </div>
      <div className="timer-button">
        <button onClick={handlePlay} id="start_stop">Start/Stop</button>
        <button onClick={handleReset} id="reset">Reset</button>
      </div>
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
