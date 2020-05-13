import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar';
import Header from "./Components/Header.js"
import Styles from "./Components/Styles.js"
import Home from "./Components/Home.js"
import Graphics from "./Components/Graphics.js"
import ThreeTest from "./Components/ThreeTest.js"
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
	<Header/>
        <div>
          <Route exact path="/Styles" component={Styles} />
          <Route path="/Home" component={Home} />
          <Route path="/Graphics" component={Graphics} />
          <Route path="/Three" component={ThreeTest} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
