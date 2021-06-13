import React from "react";

interface ServiceDisplayProps {
    img: string;
    header: string;
    details: string | JSX.Element;
}

const ServiceDisplay: React.FunctionComponent<ServiceDisplayProps> = (props: ServiceDisplayProps) => {
    console.log(props);
    return (
        <>
            <div className="service-container card">
                <div className="image-container card-image">
                    image will go here
                </div>
                <div className="main-content">
                    <div className="header">
                        Header will go here
                    </div>
                    <div className="details">
                        Rest of the details will go here
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceDisplay;