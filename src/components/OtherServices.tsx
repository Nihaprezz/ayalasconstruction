import React from "react";
import ServiceDisplay from "./ServiceDisplay";
import Other1 from "../images/other_1.jpg";
import Other2 from "../images/other_2.jpg";
import Other3 from "../images/other_3.jpg";

const OtherServices = () => {
    const otherServicesImages = [Other2, Other1, Other3];
    
    const detailsContent = () => {
        return (
            <div className="other-services-details">
                <p>
                    Other services include shrub trimming and removal. Gutter cleaning, 
                    leaf removal, tree and stump removal.
                </p>
            </div>
        );
    };

    return (
        <div>
            <ServiceDisplay 
                img={otherServicesImages}
                header="Other Services"
                details={detailsContent()}
            />
        </div>
    );
}

export default OtherServices;