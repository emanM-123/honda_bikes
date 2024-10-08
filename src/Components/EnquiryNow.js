import React, { useState, useEffect } from 'react';
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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const branchEmails = {
        'TOPLINE BENGALURU': 'sales@bigwingbengaluru.com',
        'BANASHANKARI': 'bsksales@bigwingbengaluru.com',
        'RAJA RAJESHWARI NAGAR': 'rrnagarsales@bigwingbengaluru.com',
    };


    const [otp, setOtp] = useState('');
    const [enteredOtp, setEnteredOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [timerSeconds, setTimerSeconds] = useState(0);

    useEffect(() => {
        let interval;
        if (otpSent && !otpVerified && timerSeconds > 0) {
            interval = setInterval(() => {
                setTimerSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else if (timerSeconds === 0) {
            clearInterval(interval);
            setOtpSent(false);
        }
        return () => clearInterval(interval);
    }, [otpSent, otpVerified, timerSeconds]);


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

        if (!otpVerified) {
            alert('Please verify your OTP before submitting the form.');
            return;
        }

        setIsSubmitting(true);
        const recipientEmail = branchEmails[formData.branch] || 'sales@bigwingbengaluru.com';
        const data = {
            templateType: 'enquiryNow',
            // to: 'eman.maharana@gmail.com',
            to: recipientEmail,
            emailSubject: 'Enquiry Now',
            name: formData.name,
            email: formData.email,
            selectedModel: selectedBike.modelName,
            forEnquiry: 'Yes',
            phone: formData.mobile,
        };

        try {
            // const response = await axios.post('http://localhost:3001/api/send-email', data);

            const response = await axios.post('https://honda-app-server-422410742420.asia-south1.run.app/api/send-email', data);
            if (response.status === 200) {
                alert('Form successfully submitted');
                setFormData({ name: '', email: '', mobile: '' });
                setChecked(false);
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email');
        } finally {
            // Re-enable the submit button if needed
            setIsSubmitting(false);
        }
    };

    const handleGetOtp = async () => {
        if (!validateMobile(formData.mobile)) {
            alert('Please enter a valid mobile number.');
            return;
        }

        try {
            // const response = await axios.post('http://localhost:3001/api/send-sms', { phone: formData.mobile });

            const response = await axios.post('https://honda-app-server-422410742420.asia-south1.run.app/api/send-sms', { phone: formData.mobile });
            console.log("responseresponseresponseresponse", response.data.otp)
            setOtp(response.data.otp);
            setOtpSent(true);
            alert('OTP sent successfully on your phone number');
            setTimerSeconds(30);
        } catch (error) {
            console.error('Error sending OTP:', error);
            alert('Error sending OTP');
        }
    };

    const handleVerifyOtp = () => {
        if (enteredOtp === otp) {
            setOtpVerified(true);
            alert('OTP verified successfully');
        } else {
            alert('Invalid OTP. Please try again.');
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
                        {/* <select className='enq-title-input' onChange={handleSelectChange} value={selected}>
                            <option value="">TITLE</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                        </select> */}
                        <input
                            className="enq-name-input"
                            type="text"
                            placeholder="ENTER NAME"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
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
                            required
                        />
                    </div>
                    {!otpSent ? (
                        <div className='enq-mobile-div'>
                            <input
                                className="enq-mob-input"
                                type="text"
                                placeholder="ENTER MOBILE NO."
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                required
                            />
                            <button className='enq-otp-btn1' type="button" onClick={handleGetOtp}>Get OTP</button>
                        </div>
                    ) : (
                        <div className='enq-mobile-div1'>
                            <input
                                className="enq-mob-input"
                                type="text"
                                placeholder="ENTER MOBILE NO."
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    )}

                    {otpSent && !otpVerified && (
                        <div className="enq-mobile-div">
                            <input
                                className="enq-mob-input"
                                type="text"
                                placeholder="ENTER OTP"
                                value={enteredOtp}
                                onChange={(e) => setEnteredOtp(e.target.value)}
                                required
                            />
                            <button className='enq-otp-btn1' type="button" onClick={handleVerifyOtp}>Verify OTP</button>
                        </div>
                    )}

                    {otpVerified && (
                        <div className="rsa-verification-success">
                            <p>OTP Verified Successfully!</p>
                        </div>
                    )}

                    {otpSent && !otpVerified && timerSeconds > 0 && (
                        <div className="enq-timer">
                            <p>OTP expires in {timerSeconds} seconds</p>
                        </div>
                    )}

                    <div htmlFor="terms1" className="checkbox-label">
                        <label htmlFor="terms1" className="checkbox-label">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={checked}
                                onChange={handleCheckboxChange}
                                className="ride-checkbox-input"
                                required
                            />
                            <span className="checkbox-custom"></span>
                            <span className="checkbox-text">I agree to the Terms & Conditions</span>
                        </label>
                    </div>

                    <div className="enq-input-btn1">
                        {/* <button className='enq-btn1' type="submit">Submit</button> */}
                        <button className='enq-btn1' type="submit" onClick={handleSubmit} disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting.' : 'Submit'}
                        </button>
                        <button className='enq-btn1' type="reset" onClick={() => setFormData({ name: '', email: '', mobile: '' })}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EnquiryNow;
