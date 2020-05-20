import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Toolbar from './Toolbar';
import Header from "./Components/Header.js"
import Home from "./Components/Home.js"
import { Graphics, Physics, AI, Web } from "./Components/Categories.js"
import ShaderGallery from "./Components/ShaderGallery.js"
import About from "./Components/About.js"
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
	<Header/>
        <div>
          <Route path="/Home" component={Home} />
          <Route path="/Graphics" component={Graphics} />
          <Route path="/Physics" component={Physics} />
          <Route path="/AI" component={AI} />
          <Route path="/Web" component={Web} />
          <Route path="/ShaderGallery" component={ShaderGallery} />
          <Route path="/About" component={About} />
        </div>
      </HashRouter>
    </div>
  );
}
//          <Route exact path="/CV" component={Styles} />

export default App;
