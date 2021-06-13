import React from "react";
import ServiceDisplay from "../components/ServiceDisplay";
import Mulch1 from "../images/mulch_install_1.jpg";
import Mulch2 from "../images/mulch_install_2.jpg";

export const Services: React.FunctionComponent = () => {
    return (
        <div className="services-page">
            <ServiceDisplay 
                img={Mulch1} 
                header={"Mulch Installation"} 
                details="This is the content for the page"
            />
        </div>
    );
}