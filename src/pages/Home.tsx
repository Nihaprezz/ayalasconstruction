import React from "react";
import "../styles/home.scss";
// import Landing from "../images/landing.svg";
// import Landing2 from "../images/landing-design.png";

export const Home: React.FunctionComponent = () => {
    return (
        <div className="main-home-page">
            <div className="home-page-content">
                <h1 className="title">Ayala's Construction LLC.</h1>
                <p className="subtitle">Landscaping, Erosion Control, and Site Work</p>
                <button className="button is-primary">Contact Us <span>571-464-3735</span></button>
            </div>
        </div>
    )
};
