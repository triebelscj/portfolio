import React from 'react'

function Portfolio() {
    return (
        <div className="portfolio-display">
            <div id="container-two">
                <h1>Recent Projects</h1>
                <div className="show-work">
                    <div className="flip-card myDIV">
                        <div className="flip-card-inner myDIV">
                            <div className="flip-card-front myDIV"></div>
                            <div className="flip-card-back myDIV">
                                <h2 className="myDIV" id="project-title">Project Title</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front"></div>
                            <div className="flip-card-back">
                                <h2 id="project-title">Project Title</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front"></div>
                            <div className="flip-card-back">
                                <h2 id="project-title">Project Title</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="hide" >I am shown when someone hovers over the div above.</h3>
            </div>
        </div>
    )
}

export default Portfolio
