import React, { useState, useEffect } from 'react';

const GallerySlide = ({ images }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [imagesPerScreen, setImagesPerScreen] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 670) {
                setImagesPerScreen(1);
            } else if (window.innerWidth <= 864) {
                setImagesPerScreen(3);
            } else {
                setImagesPerScreen(3);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollLeft = () => {
        setStartIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const scrollRight = () => {
        setStartIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const getVisibleImages = () => {
        let visibleImages = [];
        for (let i = 0; i < imagesPerScreen; i++) {
            visibleImages.push(images[(startIndex + i) % images.length]);
        }
        return visibleImages;
    };

    return (
        <div className="slideshow-container">
            <p className="gallery-title">GALLERY</p>
            <div className="gallery-wrapper">
                <div className="scroll-buttons gprev" onClick={scrollLeft}></div>
                {getVisibleImages().map((image, index) => (
                    <div key={startIndex + index} className="gallery-slide">
                        <img src={image} className="slide-img" alt={`Gallery Image ${startIndex + index}`} />
                    </div>
                ))}
                <div className="scroll-buttons gnext" onClick={scrollRight}></div>
            </div>
        </div>
    );
};

export default GallerySlide;
