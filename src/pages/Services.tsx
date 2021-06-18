import React from "react";
import MulchService from "../components/MulchService";
import SoldInstallation from "../components/SoldInstallService";
import WorkStoneService from "../components/WorkStoneService";
import PowerWashingService from "../components/PowerWashingService";
import ConcreteResurfacingService from "../components/ConcreteResurfacingService";
import TurfInstallService from "../components/TurfInstallService";
import OtherServices from "../components/OtherServices";
import "../styles/services.scss";

export const Services: React.FunctionComponent = () => {
    
    return (
        <div className="services-page">
            <h1 className="title is-1">SERVICES</h1>
            <MulchService/>
            <SoldInstallation/>
            <WorkStoneService/>
            <PowerWashingService/>
            <ConcreteResurfacingService/>
            <TurfInstallService/>
            <OtherServices/>
        </div>
    );
}