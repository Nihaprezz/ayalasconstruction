import React from "react";
import MulchService from "../components/MulchService";
import SoldInstallation from "../components/SoldInstallService";
import "../styles/services.scss";

export const Services: React.FunctionComponent = () => {
    
    return (
        <div className="services-page">
            <h1 className="title is-1">SERVICES</h1>
            <MulchService/>
            <SoldInstallation/>
        </div>
    );
}