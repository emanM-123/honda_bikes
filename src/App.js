import React, { useState } from 'react';
import HomePage from "./Components/Home";
import OurStory from "./Components/OurStory";
import Motorcycle from "./Components/Motorcycle";
import BookNow from "./Components/BookNow";
import ReachUs from "./Components/ReachUs";
import RasEw from "./Components/RasEw";
import Disclaimer from "./Components/Disclaimer";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TestRide from "./Components/TestRide";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import ProductEnquiry from "./Components/ProductEnquiry";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactButton, FormPopup } from "./Components/ImageSlider";

import '../src/Styles/components.css';
import '../src/Styles/motorcycle.css';
import '../src/Styles/our_story.css';
import '../src/Styles/book_now.css';
import '../src/Styles/reach_us.css';

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleContactClick = () => {
    console.log(isPopupVisible);  
    setPopupVisible((prevState) => !prevState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <ContactButton onClick={handleContactClick} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/our_story' element={<OurStory />} />
            <Route path='/motorcycle' element={<Motorcycle />} />
            <Route path='/book_now' element={<BookNow />} />
            <Route path='/reach_us' element={<ReachUs />} />
            <Route path='/rsa_ew' element={<RasEw />} />
            <Route path='/disclaimer' element={<Disclaimer />} />
            <Route path='/test_ride' element={<TestRide />} />
            <Route path='/product_enquiry' element={<ProductEnquiry />} />
            <Route path='/privacy_policy' element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <FormPopup isVisible={isPopupVisible} onClose={handleContactClick} />
      </header>
    </div>
  );
}

export default App;
