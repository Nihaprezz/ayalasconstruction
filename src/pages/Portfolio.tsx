import React from "react";

function importAll(r: any) {
    let images: any = {};
    r.keys().map((item: any, index: any) => { images[item.replace('./', '')] = r(item); });
    return images;
}

type Img = { default: string };

export const Portfolio = () => {
    const allImages = importAll(require.context('../images', false, /\.(jpe?g)$/));
    const allImgValues: Img[] = Object.values(allImages);

    return (
        <div className="portfolio-page">
            {allImgValues.map((img) => {
                return (
                    <div key={img.default}>
                        <img alt={img.default} src={img.default}/>
                    </div>
                );
            })}
        </div>
    );
};