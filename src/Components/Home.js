import React, {useState} from 'react';
import ImageSlider from "./ImageSlider";
import { bannerImages, bikeSDetails } from "../data/bannerImages";
import LandingPage from "./LandingPageText";
import BikeSlider from "./BikeSlider";
import GallerySlide from "./GallerySlide";
import Card from "./Card";
import '../Styles/components.css'
function HomePage() {
    const [currentSlideId, setCurrentSlideId] = useState(1);
    const handleSlideChange = (slideId) => {
      setCurrentSlideId(slideId);
    };
    const selectedBike = bikeSDetails.find(bike => bike.id === parseInt(currentSlideId));
    const galleryImages = selectedBike ? selectedBike.gallery.map(image => image) : [];
    return (
        <div>
            <ImageSlider images={bannerImages} />
            <LandingPage />
            <BikeSlider images={bikeSDetails} onSlideChange={handleSlideChange} />
            <Card
                icon1="/images/span.icon1.png"
                text1="BOOK A TEST RIDE"
                link1="/test_ride"
                icon2="/images/span.icon3.png"
                text2="PRODUCT ENQUIRY"
                link2="/product_enquiry"
            />
            <GallerySlide images={galleryImages} />
        </div>

    );
}

export default HomePage;
