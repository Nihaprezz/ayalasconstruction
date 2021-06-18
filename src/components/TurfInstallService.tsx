import React from "react";
import ServiceDisplay from "./ServiceDisplay";
import TurfInstall1  from "../images/turf_install_1.jpg";
import TurfInstall2  from "../images/turf_install_2.jpg";
import TurfInstall3  from "../images/turf_install_3.jpg";
import TurfInstall4  from "../images/turf_install_4.jpg";
import TurfInstall5  from "../images/turf_install_5.jpg";
import TurfInstall6  from "../images/turf_install_6.jpg";
import TurfInstall7  from "../images/turf_install_7.jpg";

const TurfInstallService = () => {
    const turfInstallImages = [TurfInstall2, TurfInstall1, TurfInstall3, 
        TurfInstall4, TurfInstall5, TurfInstall6, TurfInstall7];

    const detailsContent = () => {
        return (
            <div className="turf-install-details">
                <p>
                    Artificial is a good option if you are looking for something that does not need a lot of 
                    attention like cutting it, watering it, or fertilizing it. We prepare the ground and place 
                    a fabric filter to protect from weeds. Followed by a gravel base for good water drainage 
                    and a layer of grass of your choice. We have a wide range of grass models for residences, 
                    playground, and commercial. 
                </p>
            </div>
        )
    }    
    return (
        <div>
            <ServiceDisplay 
                img={turfInstallImages}
                header="Turf Installation"
                details={detailsContent()}
            />
        </div>
    );
};

export default TurfInstallService;