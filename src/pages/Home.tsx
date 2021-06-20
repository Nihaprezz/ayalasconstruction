import React from "react";
import "../styles/home.scss";
// import Landing from "../images/landing.svg";
import Landing from "../images/landing-design.png";

export const Home: React.FunctionComponent = () => {
    return (
        <div className="main-home-page">
            <div className="home-page-logo">
                <img alt="Ayalas Construction LLC" src={Landing}/>
            </div>
            <div className="home-page-content">
                <h1 id="home-title" className="title">Ayala's Construction LLC.</h1>
                <p id="home-subtitle" className="subtitle">Landscaping, Erosion Control, and Site Work.</p>
                <div id="contact-us-div">
                    Contact us today at <span>571-464-3735.</span>
                </div>
            </div>
            <div className="divider"/>
            <div className="home-services-overview">
                <p className="title">Services</p>
                <ul>
                    <li>Reataining Walls</li>
                    <li>Power Washing</li>
                    <li>Street Sweeping</li>
                    <li>Hydro Seeding</li>
                    <li>Asphalt Patches</li>
                    <li>Yard Repairs</li>
                    <li>Yard Boxes</li>
                    <li>Down Spout Drains</li>
                    <li>French Drain</li>
                    <li>Drain Title</li>
                    <li>Tree Removal</li>
                    <li>Fencing</li>
                    <li>Grading</li>
                    <li>Aeration</li>
                    <li>Sod Installation</li>                    
                    <li>Mulch</li>
                    <li>Wash Gravel</li>
                    <li>River Jack</li>
                    <li>Patio Flagstone</li>
                    <li>Shrub Trimming</li>
                    <li>Weeding Control </li>
                    <li>Leaf Clean Up</li>
                    <li>Clean Gutters</li>
                    <li>All General Landscaping</li>
                </ul>
            </div>
        </div>
    )
};
