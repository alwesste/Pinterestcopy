import React, { useState, useEffect } from "react";
import { fetchCatImages } from "../../public/photos/CallAPI/CatAPI";

import "./ImagesScrolling.scss"

const ImagesScrolling = () => {
    
    const [catImages, setCatImages] = useState([]);

    useEffect(() => {
        
        fetchCatImages()

        const displayCatImages = async () => {
            const imagesData = await Promise.all(Array.from({ length: 6 }, fetchCatImages));
            const images = imagesData.map(catData => catData[0]?.url).filter(Boolean);
            setCatImages(images);
        };

        displayCatImages();
    }, []);

    return (
        <>
            <div className="catImages">
                {catImages.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Cat ${index}`} style={{ maxWidth: "100%", height: "auto" }} />
                ))}
            </div>
        </>
    );
};

export default ImagesScrolling;
