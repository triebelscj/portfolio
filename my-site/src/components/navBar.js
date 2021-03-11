import React from 'react'
import { Router } from '@reach/router'
import { Dropdown } from "react-bootstrap"

function navBar() {

    // const handleMenu = () => {
    //     console.log(alert("fuck you it works"))
    // }

    function portScroll() {
        window.scrollBy(0, 750);
        console.log("MOVING")
    }
    function aboutScroll() {
        window.scrollBy(0, 1500);
        console.log("MOVING")
    }
    function connectScroll() {
        window.scrollBy(0, 2500);
        console.log("MOVING")
    }


    return (
        <>
            {/* <nav className="navFlex">
                <h1><Link to="/" className="home">Logo</Link></h1>
                <h1 onClick={handleMenu}>Menu</h1>
            </nav> */}
            <Dropdown className="navFlex">
                <h2><i className="far fa-map"></i></h2>
                <div className="contain">
                    <h1 onClick={portScroll}>Portfolio</h1>
                    <h1 onClick={aboutScroll}>About</h1>
                    <h1 onClick={connectScroll}>Connect</h1>
                </div>
                {/* <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Menu
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropped-down">
                    <Dropdown.Item className="about-link" href="#/action-1">About</Dropdown.Item>
                    <Dropdown.Item className="about-link">Portfolio</Dropdown.Item>
                    <Dropdown.Item className="about-link">Connect</Dropdown.Item>
                </Dropdown.Menu> */}
            </Dropdown>
            <Router>

            </Router>
        </>
    )
}

export default navBar
