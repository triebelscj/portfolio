import React from 'react';
import './App.css';
import NavBar from './components/navBar'
import { Link, Router } from '@reach/router'
import About from './components/about'

function App() {
  return (
    <div className="App">
      <div id="wrapper">

        <div id="container">

          {/* <div id="logo">C</div> */}
          {/* <nav id="navBar">Menu</nav> */}

          <NavBar />
          <h1 className="hello">CREATOR</h1>
          <h5>Website and User Interface Creator.</h5>
          <div id="iAm">
            <h6>Designer</h6>
            <div className="slash"></div>
            <h6>Developer</h6>
            <div className="slash"></div>
            <h6>Photographer</h6>
          </div>
        </div>



        {/* About */}
        <div id="container-two">
          <About />
        </div>



      </div>
    </div >
  );
}

export default App;
