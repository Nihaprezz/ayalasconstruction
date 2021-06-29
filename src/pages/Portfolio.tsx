import React from "react";
import "../styles/portfolio.scss";

function importAll(r: any) {
    let images: any = {};
    r.keys().map((item: any, index: any) => { images[item.replace('./', '')] = r(item); });
    return images;
}

type Img = { default: string };

export const Portfolio = () => {
    const allImages = importAll(require.context('../images', false, /\.(jpe?g)$/));
    const allImgValues: Img[] = Object.values(allImages);

    const getImageCaption = (imageSrc: string): string => {
        if(imageSrc.includes("concrete_resurface")) {
            return "Concrete resurface"
        } else if (imageSrc.includes("mulch_install")) {
            return "Mulch install"
        } else if (imageSrc.includes("power_washing")) {
            return "Power washing "
        } else if (imageSrc.includes("sod_instal")) {
            return "Sod install"
        } else if (imageSrc.includes("turf_install")) {
            return "Turf install"
        } else if (imageSrc.includes("work_stone")) {
            return "Work stone"
        } else {
            return "Other service"
        };
    }

    return (
        <div className="portfolio-page">
            {allImgValues.map((img) => {
                return (
                    <div key={img.default}>
                        <img alt={img.default} src={img.default}/>
                        <div className="image-tool-tip ">
                            {getImageCaption(img.default)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};