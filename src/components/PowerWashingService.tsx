import React from "react";
import ServiceDisplay from "./ServiceDisplay";
import PowerWashing1 from "../images/power_washing_1.jpg";
import PowerWashing2 from "../images/power_washing_2.jpg";
import PowerWashing3 from "../images/power_washing_3.jpg";
import PowerWashing4 from "../images/power_washing_4.jpg";

const PowerWashingService = () => {
    const powerWashingImages = [PowerWashing1, PowerWashing2, PowerWashing3, PowerWashing4];

    const detailsContent = () => {
        return (
            <div className="power-washing-details">
                <p>
                    We remove accumulated dirt on siding, bricks, concrete, asphalt, and decks.
                </p>
            </div>
        )
    }
    
    return (
        <div>
            <ServiceDisplay
                img={powerWashingImages}
                header="Power Washing"
                details={detailsContent()}
            />
        </div>
    );
};

export default PowerWashingService;