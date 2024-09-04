
import React, { useState, useEffect } from 'react';
import { validateEmail, validateMobile } from '../Utils/validation';
import axios from 'axios';

const ProductEnquiry = () => {
    const [selected, setSelected] = useState('TITLE');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [checked, setChecked] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: 'BANGALORE',
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    };

    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!checked) {
            alert("You must agree to the terms and conditions to submit the form.");
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
            ...formData,
            title: selected,
            branch: selectedBranch,
            renewInsuranceChecked: true,
            extendedWarrantyChecked: false,
            templateType: 'productEnquiry',
            emailSubject: 'Product Enquiry',
            to: "eman.maharana@gmail.com"
        };

        try {
            const response = await axios.post('https://honda-app-server-wp4bffpqkq-el.a.run.app/api/send-email', data);
            if (response.status === 200) {
                alert('Email sent successfully');
                handleReset();
            } else {
                alert('Failed to send email');
            }

        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email. Please try again.');
        }
    };

    const handleGetOtp = async () => {
        if (!validateMobile(formData.mobile)) {
            alert('Please enter a valid mobile number.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/send-sms', { phone: formData.mobile });

            // const response = await axios.post('https://honda-app-server-wp4bffpqkq-el.a.run.app/api/send-sms', { phone: formData.mobile });
            console.log("responseresponseresponseresponse", response.data.otp)
            setOtp(response.data.otp);
            setOtpSent(true);
            alert('OTP sent successfully on your phone number');
            setTimerSeconds(60);
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


    const options = [
        { label: 'TITLE', value: '' },
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Mrs.', value: 'Mrs.' },
    ];

    const branchOptions = [
        { label: 'SELECT BRANCH', value: '' },
        { label: 'TOPLINE BENGALURU', value: 'TOPLINE BENGALURU' },
        { label: 'BANASHANKARI', value: 'BANASHANKARI' },
        { label: 'RAJA RAJESHWARI NAGAR', value: 'RAJA RAJESHWARI NAGAR' },
    ];

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            mobile: '',
            address: 'BANGALORE',
        });
        setSelected('');
        setSelectedBranch('');
        setChecked(false);
    };

    return (
        <div className="slideshow-container">
            <div className="ride-container">
                <img src="/images/Rectangle1.png" alt="div-image" className='ride-div' />
                <div className='ride-sprite-icon'>
                    <img src="/images/spirite_icon.png" alt="test-ride-icon" />
                    <span>PRODUCT ENQUIRY</span>
                </div>
                <div className="pro-enq-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <select className='ride-title-input' onChange={handleSelectChange} value={selected}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <input
                                className="ride-name-input"
                                type="text"
                                placeholder="ENTER NAME"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <input
                                className="ride-email-input"
                                type="email"
                                placeholder="ENTER EMAIL"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        {!otpSent ? (
                            <div className='ride-mobile-div'>
                                <input
                                    className="ride-mob-input"
                                    type="text"
                                    placeholder="ENTER MOBILE NO."
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                />
                                <button className='ride-otp-btn1' type="button" onClick={handleGetOtp}>Get OTP</button>
                            </div>
                        ) : (
                            <div className='ride-mobile-div1'>
                                <input
                                    className="ride-mob-input"
                                    type="text"
                                    placeholder="ENTER MOBILE NO."
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                />
                            </div>
                        )}

                        {otpSent && !otpVerified && (
                            <div className="ride-mobile-div">
                                <input
                                    className="ride-mob-input"
                                    type="text"
                                    placeholder="ENTER OTP"
                                    value={enteredOtp}
                                    onChange={(e) => setEnteredOtp(e.target.value)}
                                />
                                <button className='ride-otp-btn1' type="button" onClick={handleVerifyOtp}>Verify OTP</button>
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

                        <div>
                            <input
                                className='ride-add-input'
                                type='text'
                                value='BANGALORE'
                                readOnly
                            />
                            <select className='ride-add-select' onChange={handleBranchChange} value={selectedBranch}>
                                {branchOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>

                        </div>
                        <div htmlFor="terms" className="product-enquiry-checkbox-label">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={checked}
                                onChange={handleCheckboxChange}
                                className="ride-checkbox-input"
                            />
                            <span className="checkbox-custom"></span>
                            <span className="checkbox-text">I agree to the Terms & Conditions</span>
                        </div>
                        <div className="ride-input-btn1">
                            <button className='ride-btn1' type="submit">Submit</button>
                            <button className='ride-btn1' type="reset" onClick={handleReset}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductEnquiry;
