import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar';

function App() {
  const tabs = [
    { title: "ichi" },
    { title: "ni" },
    { title: "san" },
  ];
  const contents = [
    { inner: <div className="truc">
                    </div>},
    { inner: <h3>Title</h3> },
    { inner: <h3>Title</h3> }
  ];
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
      </header>
      <Toolbar tabs={tabs} contents={contents} />
    </div>
  );
}

export default App;
