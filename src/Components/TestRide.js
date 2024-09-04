import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { validateEmail, validateMobile } from '../Utils/validation';

const TestRide = (selectedBike) => {        
    const [selected, setSelected] = useState('TITLE');
    const [checked, setChecked] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
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


    const handleCheckboxChange1 = () => {
        setChecked(!checked);
    };

    const options = [
        { label: 'TITLE', value: '' },
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Mrs.', value: 'Mrs.' },
    ];

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    };

    const branchOptions = [
        { label: 'SELECT BRANCH', value: '' },
        { label: 'TOPLINE BENGALURU', value: 'TOPLINE BENGALURU' },
        { label: 'BANASHANKARI', value: 'BANASHANKARI' },
        { label: 'RAJA RAJESHWARI NAGAR', value: 'RAJA RAJESHWARI NAGAR' },
    ];

    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateEmail(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!validateMobile(formData.mobile)) {
            alert('Please enter a valid mobile number.');
            return;
        }

        if (!checked) {
            alert('Please agree to the Terms & Conditions');
            return;
        }

        const data = {
            templateType: 'testRide',
            emailSubject: 'Test Ride Request',
            name: selected + ' ' + formData.name,
            email: formData.email,
            phone: formData.mobile,
            branch: selectedBranch,
            city: 'BANGALORE',
            // to: 'eman.maharana@gmail.com',
            to: "sales@bigwingbengaluru.com",

            selectedModel: selectedBike.selectedBike.modelName,
            forTestRide: 'Yes',
        };

        try {
            // const response = await axios.post('http://localhost:3001/api/send-email', data);

            const response = await axios.post('https://honda-app-server-422410742420.asia-south1.run.app/api/send-email', data);
            if (response.status === 200) {
                alert('Email sent successfully');
                setFormData({ name: '', email: '', mobile: '' });
                setChecked(false);
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
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


    return (
        <div className="slideshow-container">
            <div className="ride-container">
                <img src="/images/Rectangle1.png" alt="div-image" className='ride-div' />
                <div className='ride-sprite-icon'>
                    <img src="/images/spirite_icon.png" alt="test-ride-icon" />
                    <span style={{ marginBottom: '10px' }}>BOOK A TEST RIDE</span>
                </div>
                <div className="ride-form">
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
                        <select
                            className='ride-add-select'
                            onChange={handleBranchChange}
                            value={selectedBranch}
                        >
                            {branchOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <label htmlFor="terms2" className="ride-checkbox-label">
                        <input
                            type="checkbox"
                            id="terms2"
                            checked={checked}
                            onChange={handleCheckboxChange1}
                            className="ride-checkbox-input"
                        />
                        <span className="ride-checkbox-custom"></span>
                        <span className="ride-checkbox-text">I agree to the Terms & Conditions</span>
                    </label>
                    <div className="ride-input-btn1">
                        <button className='ride-btn1' type="submit" onClick={handleSubmit}>Submit</button>
                        <button className='ride-btn1' type="button">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestRide;
