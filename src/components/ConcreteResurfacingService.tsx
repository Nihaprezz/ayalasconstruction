import React from "react";
import ServiceDisplay from "../components/ServiceDisplay";
import ConcreteResurfacing1 from "../images/concrete_resurface_1.jpg";
import ConcreteResurfacing2 from "../images/concrete_resurface_2.jpg";
import ConcreteResurfacing3 from "../images/concrete_resurface_3.jpg";
import ConcreteResurfacing4 from "../images/concrete_resurface_4.jpg";
import ConcreteResurfacing5 from "../images/concrete_resurface_5.jpg";

const ConcreteResurfacingService = () => {
    const concreteResurfaceImages = [ConcreteResurfacing4, ConcreteResurfacing1, ConcreteResurfacing2, 
        ConcreteResurfacing3, ConcreteResurfacing5];

    const detailsContent = () => {
        return (
            <div className="concrete-resurfacing-details">
                <p>
                    We give a new look to concrete that is neglected and may still have a useful life 
                    before being replaced with a new one.
                </p>
            </div>
        );
    };

    return (
        <div>
            <ServiceDisplay 
                img={concreteResurfaceImages}
                header="Concrete Resurfacing"
                details={detailsContent()}
            />
        </div>
    )
}

export default ConcreteResurfacingService;