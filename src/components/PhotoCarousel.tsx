import React from "react";
import "../styles/carousel.scss";

interface PhotoCarouselProps {
    images: string[];
}

const PhotoCarousel: React.FunctionComponent<PhotoCarouselProps> = (props: PhotoCarouselProps) => {
    return (
        <div className="carousel-container">
            This will be the carousel component
        </div>
    );
};

export default PhotoCarousel;