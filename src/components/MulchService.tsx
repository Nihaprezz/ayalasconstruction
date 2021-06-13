import React from "react";
import ServiceDisplay from "./ServiceDisplay";
import Mulch1 from "../images/mulch_install_1.jpg";
import Mulch2 from "../images/mulch_install_2.jpg";
import Mulch3 from "../images/mulch_install_3.jpg";

const MulchService: React.FunctionComponent = () => {
    const mulchImages = [Mulch1, Mulch2, Mulch3];

    const detailsContent = (): JSX.Element => {
        return (
            <div>
                <p>We have the following colors:</p>
                <ul>
                    <li>Regular Mulch</li>
                    <li>Brown Mulch</li>
                    <li>Black Mulch</li>
                    <li>Red Mulch</li>
                </ul>
                <br/>
                <p>With natural edge, plastic edge, metal edge, and stone edge.</p>
                <p>The most common in residential and commercial properties, but we also have rubber playground mulch.</p>
            </div>
        )
    }

    return (
        <div>
            <ServiceDisplay 
                img={mulchImages} 
                header={"Mulch Installation"} 
                details={detailsContent()}
            />
        </div>
    )
};

export default MulchService;