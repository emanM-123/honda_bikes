import React, { useState } from 'react';
import '../Styles/book_now.css';
import { validateEmail, validateMobile } from '../Utils/validation';
import axios from 'axios';

const EnquiryNow = ({ selectedVariant, selectedBike }) => {
    console.log("selectedBikeselectedBike", selectedBike);
    const [selected, setSelected] = useState('TITLE');
    const [checked, setChecked] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
    });

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!checked) {
            alert('Please agree to the Terms & Conditions');
            return;
        }

        if (!validateEmail(formData.email)) {
            alert('Please enter a valid email address.');
            return;
          }
          if (!validateMobile(formData.mobile)) {
            alert('Please enter a valid mobile number.');
            return;
          }

        const data = {
            templateType: 'enquiryNow',
            to: 'eman.maharana@gmail.com', 
            emailSubject: 'Enquiry Now', 
            name: selected + ' ' + formData.name,
            email: formData.email,
            mobile: formData.mobile,
            bikeModel: selectedBike.model,
        };

        try {
            const response = await axios.post('https://honda-app-server-wp4bffpqkq-el.a.run.app/api/send-email', data);
            if (response.status === 200) {
                alert('Email sent successfully');
                setFormData({ name: '', email: '', mobile: '' }); 
                setChecked(false); 
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email');
        }
    };

    return (
        <div className="slideshow-container">
            <div className="sprit-icon2">
                <img src="/images/spirite_icon.png" alt='spirite-icon'></img>
                <h1>ENQUIRY NOW</h1>
            </div>

            <div className="enquiry-container">
                <div className="image">
                    <img src={selectedVariant.colors[0].link} alt="Image" />
                    <p>{selectedVariant.price}</p>
                    <span>EX-SHOWROOM PRICE</span>
                </div>
                <form className="enq-form" onSubmit={handleSubmit}>
                    <div>
                        <select className='enq-title-input' onChange={handleSelectChange} value={selected}>
                            <option value="">TITLE</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                        </select>
                        <input
                            className="enq-name-input"
                            type="text"
                            placeholder="ENTER NAME"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                            className="enq-email-input"
                            type="email"
                            placeholder="ENTER EMAIL"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='enq-mobile-div'>
                        <input
                            className="enq-mob-input"
                            type="text"
                            placeholder="ENTER MOBILE NO."
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                        />
                        <button className='enq-otp-btn1' type="button">Get OTP</button>
                    </div>
                    <div htmlFor="terms" className="checkbox-label">
                        <label htmlFor="terms" className="checkbox-label">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={checked}
                                onChange={handleCheckboxChange}
                                className="ride-checkbox-input"
                            />
                            <span className="checkbox-custom"></span>
                            <span className="checkbox-text">I agree to the Terms & Conditions</span>
                        </label>
                    </div>

                    <div className="enq-input-btn1">
                        <button className='enq-btn1' type="submit">Submit</button>
                        <button className='enq-btn1' type="reset" onClick={() => setFormData({ name: '', email: '', mobile: '' })}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EnquiryNow;
