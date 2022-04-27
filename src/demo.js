import * as React from 'react';
import logo from './logo.png';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          freeCodeCamp <code><h3>Project 5</h3></code> Frontend Devevelopment
        </p>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powerd by React
        </a>
      </header>
    </div>
  );
}

export default App;