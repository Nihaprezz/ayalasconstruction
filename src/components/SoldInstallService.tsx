import React from "react";
import ServiceDisplay from "./ServiceDisplay";
import SodInstall1 from "../images/sod_install_1.jpg";
import SodInstall2 from "../images/sod_install_2.jpg";
import SodInstall3 from "../images/sod_install_3.jpg"; 
import SodInstall4 from "../images/sod_install_4.jpg";
import SodInstall5 from "../images/sod_install_5.jpg";


const SoldInstallation: React.FunctionComponent = () => {
    const sodInstallImages = [SodInstall1, SodInstall2, SodInstall3, SodInstall4, SodInstall5];

    const detailsContent = () => {
        return (
            <div className="sod-installation-details">
                <p>
                    For this service we offer from just the installation to the preparation of the ground
                    (leveling, cleaning, and removal of old grass). The ground is prepared by adding a layer of top soil
                    before putting the new grass. After installation you will need to water every day for at least 
                    the first month.
                </p>
            </div>
        )
    }

    return (
        <div>
            <ServiceDisplay 
                img={sodInstallImages}
                header="Sod Installation"
                details={detailsContent()}
            />
        </div>
    )
};

export default SoldInstallation;