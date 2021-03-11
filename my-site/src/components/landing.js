import React from 'react'
import NavBar from './navBar'

function landing() {

    // Down Arrow
    function handleScroll() {
        window.scrollBy(0, 750);
        console.log("MOVING")
    }


    return (
        <div>
            <div id="wrapper">
                {/* <div className="circle-one"></div>
                <div className="circle-2"></div> */}
                <div id="container">
                    <NavBar />
                    <h1 className="hello">CREATOR</h1>
                    <h5>Website and User Interface Creator</h5>
                    <div id="iAm">
                        <h6>Designer</h6>
                        <div className="slash"></div>
                        <h6>Developer</h6>
                        <div className="slash"></div>
                        <h6>Photographer</h6>
                    </div>
                </div>
                {/* <div className="container-1">
                    <div className="circle" onClick={handleScroll}><i className="fas fa-arrow-down"></i></div>
                </div> */}
            </div>
        </div>

    )
}

export default landing
