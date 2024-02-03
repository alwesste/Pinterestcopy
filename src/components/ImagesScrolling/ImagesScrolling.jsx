import React, { useState, useEffect } from "react";
import { fetchCatImages } from "../../public/photos/CallAPI/CatAPI";

import "./ImagesScrolling.scss"

const ImagesScrolling = () => {
    
    const [catImages, setCatImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const imagesData = await Promise.all(Array.from({ length: 6 }, fetchCatImages));
                const images = imagesData.map(catData => catData[0]?.url);
                console.log(imagesData)
                setCatImages(images);
            } catch (error) {
                console.error("Error fetching cat images:", error);
            }
        };

        // Initial call
        fetchData();

        // Schedule recurring API calls every 10 seconds
        // const intervalId = setInterval(fetchData, 10000);

        // // Clean up the interval when the component unmounts
        // return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="images">
                {catImages.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Cat ${index}`} className="images-cat"/>
                ))}
            </div>
        </>
    );
};

export default ImagesScrolling;
