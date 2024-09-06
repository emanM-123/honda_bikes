import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { validateEmail, validateMobile } from '../Utils/validation';

const TestRide = (selectedBike) => {
    const [checked, setChecked] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState('');
    const [formData, setFormData] = useState({
        selectedModel: '',
        name: '',
        email: '',
        mobile: '',
        selectedBranch: ''
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


    const branchOptions = [
        { label: 'SELECT BRANCH', value: '' },
        { label: 'TOPLINE BENGALURU', value: 'TOPLINE BENGALURU' },
        { label: 'BANASHANKARI', value: 'BANASHANKARI' },
        { label: 'RAJA RAJESHWARI NAGAR', value: 'RAJA RAJESHWARI NAGAR' },
    ];

    const modelOptions = [
        { label: 'SELECT MODEL', value: '' },
        { label: 'CB300F', value: 'CB300F' },
        { label: 'CB300R', value: 'CB300R' },
        { label: 'CB350', value: 'CB350' },
        { label: 'H’nessCB350', value: 'H’nessCB350' },
        { label: 'CB350RS', value: 'CB350RS' },
        { label: 'NX500', value: 'NX500' },
        { label: 'TRANSALP', value: 'TRANSALP' },
        { label: 'GOLDWING', value: 'GOLDWING' },
    ];

    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.name || !formData.mobile || !formData.email) {
            alert('Please fill out all mandatory fields: First Name, Phone Number, Email, Branch, and Model');
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

        if (!checked) {
            alert('Please agree to the Terms & Conditions');
            return;
        }

        if (!otpVerified) {
            alert('Please verify your OTP before submitting the form.');
            return;
        }


        const data = {
            templateType: 'enquiryNow',
            emailSubject: 'Enquiry Request',
            name: formData.name,
            email: formData.email,
            phone: formData.mobile,
            branch: selectedBranch,
            city: 'BANGALORE',
            // to: 'eman.maharana@gmail.com',
            to: "sales@bigwingbengaluru.com",

            selectedModel: formData.selectedModel,
            forEnquiry: 'Yes',
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
            <div className="ride-container">
                <img src="/images/Rectangle1.png" alt="div-image" className='ride-div' />
                <div className='ride-sprite-icon'>
                    <img src="/images/spirite_icon.png" alt="test-ride-icon" />
                    <span>PRODUCT ENQUIRY</span>
                </div>
                <div className="ride-form">
                    <div className='ride-row1'>
                        <input
                            className="ride-name-input"
                            type="text"
                            placeholder="ENTER NAME"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            className="ride-email-input"
                            type="email"
                            placeholder="ENTER EMAIL"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {!otpSent ? (
                        <div className='ride-mobile-div' >
                            <div>
                                <select className="ride-select-model" name="selectedModel" onChange={handleInputChange} required value={formData.selectedModel}>
                                    {modelOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <input
                                    className="ride-mob-input"
                                    type="text"
                                    placeholder="ENTER MOBILE NO."
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button className='ride-otp-btn1' type="button" onClick={handleGetOtp}>Get OTP</button>
                            </div>
                        </div>
                    ) : (
                        <div className='ride-mobile-div'>
                            <div>
                                <select className="ride-select-model-otp" name="selectedModel" onChange={handleInputChange} required value={formData.selectedModel}>
                                    {modelOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <input
                                className="ride-mob-input-otp"
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
                        <div className="ride-mobile-div">
                            <input
                                className="ride-mob-input"
                                type="text"
                                placeholder="ENTER OTP"
                                value={enteredOtp}
                                onChange={(e) => setEnteredOtp(e.target.value)}
                                required
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
                            required
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
                            required
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
