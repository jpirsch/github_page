import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar';
import Header from "./Components/Header.js"
import Styles from "./Components/Styles.js"
import Home from "./Components/Home.js"
//import ThreeTest from "./Components/ThreeTest.js"
import { HashRouter, Route, Link } from "react-router-dom";

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
      <HashRouter basename="/">
	<Header/>
        <div>
          <Route exact path="/Styles" component={Styles} />
          <Route path="/Home" component={Home} />
        </div>
      </HashRouter>
    </div>
  );
}
//          <Route path="/Three" component={ThreeTest} />

//const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
/*
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
*/
