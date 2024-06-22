
import React, { useState, useEffect } from "react";
import { validateEmail, validateMobile } from '../Utils/validation';
import axios from 'axios';

const RsaEw = () => {
    const [formData, setFormData] = useState({
        selected: 'TITLE',
        selectedBranch: '',
        selectedModel: '',
        renewInsuranceChecked: false,
        extendedWarrantyChecked: false,
        fname: '',
        lname: '',
        email: '',
        phone: '',
        stdCode: '',
        phoneNumber: '',
        description: '',
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


    const branches = [
        { label: 'SELECT BRANCH', value: '' },
        { label: 'TOPLINE BENGALURU', value: 'TOPLINE BENGALURU' },
        { label: 'BANASHANKARI', value: 'BANASHANKARI' },
        { label: 'REJESHWARI NAGAR', value: 'REJESHWARI NAGAR' },
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

    const options = [
        { label: 'TITLE', value: '' },
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Mrs.', value: 'Mrs.' },
    ];

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleGetOtp = async () => {
        if (!validateMobile(formData.phone)) {
            alert('Please enter a valid mobile number.');
            return;
        }

        try {
            const response = await axios.post('https://honda-app-server-wp4bffpqkq-el.a.run.app/api/send-sms', { phone: formData.phone });
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateEmail(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!validateMobile(formData.phone)) {
            alert('Please enter a valid mobile number.');
            return;
        }

        if (!formData.fname || !formData.phone || !formData.email || !formData.selectedBranch || !formData.selectedModel) {
            alert('Please fill out all mandatory fields: First Name, Phone Number, Email, Branch, and Model');
            return;
        }

        const rsaWeData = {
            ...formData,
            templateType: 'rsaWe',
            emailSubject: 'RSA WE',
            to: 'eman.maharana@gmail.com',
        };


        try {
            const response = await axios.post('https://honda-app-server-wp4bffpqkq-el.a.run.app/api/send-email', rsaWeData);
            console.log('Email sent successfully:', response.data);
            alert('Email sent successfully');
            setFormData({
                selected: 'TITLE',
                selectedBranch: '',
                selectedModel: '',
                renewInsuranceChecked: false,
                extendedWarrantyChecked: false,
                fname: '',
                lname: '',
                email: '',
                phone: '',
                stdCode: '',
                phoneNumber: '',
                description: '',
            });
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email');
        }
    };

    const handleReset = () => {
        setFormData({
            selected: 'TITLE',
            selectedBranch: '',
            selectedModel: '',
            renewInsuranceChecked: false,
            extendedWarrantyChecked: false,
            fname: '',
            lname: '',
            email: '',
            phone: '',
            stdCode: '',
            phoneNumber: '',
            description: '',
        });
    };

    return (
        <div className="slideshow1-container">
            <div className="reach-us-container">
                <img className="reach-us-image" src="/images/spirite_icon4.png" alt="getInTouch-icon" />
                <div className="reach-us-text">ROADSIDE ASSISTANCE (RSA) & EXTENDED WARRANTY</div>
            </div>
            <div className="rsa-form-container">
                <div className="rsa-row1">
                    <div>
                        <select className="rsa-select-model" name="selectedModel" onChange={handleInputChange} value={formData.selectedModel}>
                            {modelOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select className="rsa-select-branch" name="selectedBranch" onChange={handleInputChange} value={formData.selectedBranch}>
                            {branches.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="rsa-row2">
                    <select className='rsa-title-input' name="selected" onChange={handleInputChange} value={formData.selected}>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <input className="rsa-name-input" type="text" placeholder="FIRST NAME" name="fname" onChange={handleInputChange} value={formData.fname} />
                    <input className="rsa-name-input" type="text" placeholder="LAST NAME" name="lname" onChange={handleInputChange} value={formData.lname} />
                </div>
                <div className="rsa-row3">
                    <input className="rsa-email-input" type="email" placeholder="ENTER EMAIL" name="email" onChange={handleInputChange} value={formData.email} />
                    <input className="rsa-mob-input" type="text" placeholder="ENTER MOBILE NO." name="phone" onChange={handleInputChange} value={formData.phone} />
                    {!otpSent && (
                        <button className='rsa-otp-btn' type="button" onClick={handleGetOtp}>Get OTP</button>
                    )}
                </div>
                {otpSent && !otpVerified && (
                    <div className="rsa-row3">
                        <input
                            className="rsa-otp-input"
                            type="text"
                            placeholder="ENTER OTP"
                            value={enteredOtp}
                            onChange={(e) => setEnteredOtp(e.target.value)}
                        />
                        <button className='rsa-otp-btn' type="button" onClick={handleVerifyOtp}>Verify OTP</button>
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

                <div className="rsa-row4">
                    <input className="rsa-std-input" type="email" placeholder="ENTER STD CODE" name="stdCode" onChange={handleInputChange} value={formData.stdCode} />
                    <input className="rsa-phone-input" type="email" placeholder="ENTER PHONE NO." name="phoneNumber" onChange={handleInputChange} value={formData.phoneNumber} />
                </div>
                <div className="rsa-row5">
                    <textarea className="rsa-desc-input" type="text" placeholder="DESCRIPTION" name="description" onChange={handleInputChange} value={formData.description} />
                </div>
                <div className='rsa-row6'>
                    <label
                        htmlFor="renew-insurance"
                        className={`rsa-checkbox-label ${formData.renewInsuranceChecked ? 'checked' : ''}`}
                    >
                        <input
                            type="checkbox"
                            id="renew-insurance"
                            className="rsa-checkbox-input"
                            name="renewInsuranceChecked"
                            checked={formData.renewInsuranceChecked}
                            onChange={handleInputChange}
                        />
                        <span className="rsa-checkbox-custom"></span>
                        <span className="rsa-checkbox-text">DO YOU WANT TO RENEW INSURANCE?</span>
                    </label>
                    <div className="gap"></div>
                    <label
                        htmlFor="extended-warranty"
                        className={`rsa-checkbox-label ${formData.extendedWarrantyChecked ? 'checked' : ''}`}
                    >
                        <input
                            type="checkbox"
                            id="extended-warranty"
                            className="rsa-checkbox-input"
                            name="extendedWarrantyChecked"
                            checked={formData.extendedWarrantyChecked}
                            onChange={handleInputChange}
                        />
                        <span className="rsa-checkbox-custom"></span>
                        <span className="rsa-checkbox-text">DO YOU WANT TO EXTENDED WARRANTY?</span>
                    </label>
                </div>
                <div className="rsa-row7">
                    <button className='rsa-btn' type="submit" onClick={handleSubmit}>Submit</button>
                    <button className='rsa-btn' type="button" onClick={handleReset}>Reset</button>
                </div>
            </div >
            <div className="frame">
                <img src="/images/frame1.png" alt="Frame1" />
                <img src="/images/frame2.png" alt="frame2" />
                <img src="/images/frame3.png" alt="frame3" />
            </div>
        </div>
    );
};

export default RsaEw;
