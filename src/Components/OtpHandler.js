import React, { useState } from 'react';
import axios from 'axios';

const OtpHandler = () => {
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState(false);
    const [enteredOtp, setEnteredOtp] = useState('');
    const [otpVerified, setOtpVerified] = useState(false);
    const [error, setError] = useState(null); 

    const handleGetOtp = async (phone) => {
        try {
            const response = await axios.post('http://localhost:3001/api/send-sms', { phone });
            console.log("OTP Response:", response.data);
            setOtp(response.data.otp);
            setOtpSent(true);
            alert('OTP sent successfully on your phone number');
        } catch (error) {
            console.error('Error sending OTP:', error);
            setError('Error sending OTP. Please try again.');
        }
    };

    const handleVerifyOtp = async () => {
        if (enteredOtp === otp) {
            setOtpVerified(true);
            alert('OTP verified successfully');
        } else {
            alert('Invalid OTP. Please try again.');
        }
    };

    return {
        otpSent,
        enteredOtp,
        otpVerified,
        handleGetOtp,
        handleVerifyOtp,
        setEnteredOtp,
    };
};

export default OtpHandler;
