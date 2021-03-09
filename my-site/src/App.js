import React from 'react';
import './App.css';
import Connect from "./components/connect"
import Portfolio from "./components/portfolio"
import About from "./components/about"
import Landing from "./components/landing"


function App() {
  return (
    <div className="App">
      <Landing />
      <Portfolio />
      <About />
      <Connect />
    </div>
  );
}

export default App;
