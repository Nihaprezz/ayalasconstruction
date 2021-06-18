import React from "react";

interface ServiceDisplayProps {
    img: string[];
    header: string;
    details: string | JSX.Element;
}

const ServiceDisplay: React.FunctionComponent<ServiceDisplayProps> = (props: ServiceDisplayProps) => {
    return (
        <>
            <div className="service-container card">
                <div className="image-container card-image">
                    <img alt={`${props.header.toLocaleLowerCase()}`}  src={props.img[0]}/>
                </div>
                <div className="main-content">
                    <div className="header title">
                        {props.header}
                    </div>
                    <div className="details">
                        {typeof props.details === "string" ? (
                            <div className="common-details">
                                {props.details}
                            </div>
                        ): (
                            <>
                                {props.details}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceDisplay;