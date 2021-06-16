import React from "react";
import ServiceDisplay from "./ServiceDisplay";
import WorkStone1 from "../images/work_stone_1.jpg";
import WorkStone2 from "../images/work_stone_2.jpg";
import WorkStone3 from "../images/work_stone_3.jpg";
import WorkStone4 from "../images/work_stone_4.jpg";
import WorkStone5 from "../images/work_stone_5.jpg";
import WorkStone6 from "../images/work_stone_6.jpg";

const WorkStoneService: React.FunctionComponent = () => {
    const workStoneImages = [WorkStone1, WorkStone2, WorkStone3, WorkStone4, WorkStone5, WorkStone6];

    const detailsContent = () => {
        return (
            <div className="workstone-details">
                <p>
                    Gravel, wash gravel and river jack. Commonly used in gardens instead of mulch. 
                    They are also used as water drains, stone walkways or just to add a unique touch
                    of beauty to your home.
                </p>
            </div>
        )
    }

    return (
        <div>
            <ServiceDisplay
                img={workStoneImages}
                header="Work Stone"
                details={detailsContent()}
            />
        </div>
    )
};

export default WorkStoneService;