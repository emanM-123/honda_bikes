import React, { useState, useEffect } from 'react';
import { validateEmail, validateMobile } from '../Utils/validation';
import axios from 'axios';

export default function ReachUs() {
  const [selected, setSelected] = useState('SELECT YOUR BRANCH');
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


  const options = [
    { label: 'SELECT BRANCH', value: '' },
    { label: 'TOPLINE BENGALURU', value: 'TOPLINE BENGALURU' },
    { label: 'BANASHANKARI', value: 'BANASHANKARI' },
    { label: 'RAJA RAJESHWARI NAGAR', value: 'RAJA RAJESHWARI NAGAR' },
  ];

  const branchEmails = {
    'TOPLINE BENGALURU': 'sales@bigwingbengaluru.com',
    'BANASHANKARI': 'bsksales@bigwingbengaluru.com',
    'RAJA RAJESHWARI NAGAR': 'rrnagarsales@bigwingbengaluru.com',
  };
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };

  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelected(event.target.value);
  };
  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };


  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fname || !email || !mobile || !selected) {
      alert('Please fill out all mandatory fields: First Name,Mobile Number, Email, and Branch');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!validateMobile(mobile)) {
      alert('Please enter a valid mobile number.');
      return;
    }

    if (!otpVerified) {
      alert('Please verify your OTP before submitting the form.');
      return;
    }

    setIsSubmitting(true);
    const recipientEmail = branchEmails[selected] || 'sales@bigwingbengaluru.com';

    try {
      const data = {
        templateType: 'reachUs',
        name: fname + ' ' + lname,
        emailSubject: 'Reach Us Form Submission',
        email: email,
        phone: mobile,
        branch: selected,
        description: message,
        // to: 'eman.maharana@gmail.com',
        to: recipientEmail,

      };




      try {
        // const response = await axios.post('http://localhost:3001/api/send-email', data);

        const response = await axios.post('https://honda-app-server-422410742420.asia-south1.run.app/api/send-email', data);
        if (response.status === 200) {
          alert('Form successfully submitted');
          handleReset();
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

    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleGetOtp = async () => {
    if (!validateMobile(mobile)) {
      alert('Please enter a valid mobile number.');
      return;
    }

    try {
      // const response = await axios.post('http://localhost:3001/api/send-sms', { phone: mobile });


      const response = await axios.post('https://honda-app-server-422410742420.asia-south1.run.app/api/send-sms', { phone: mobile });
      console.log("responseresponseresponseresponse", response.data)
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

  const handleReset = () => {
    setFname('');
    setLname('');
    setEmail('');
    setPhone('');
    setMobile('');
    setSelected('SELECT YOUR BRANCH');
    setSubject('');
    setMessage('');
  };

  return (
    <div className='slideshow1-container'>
      <div className="reach-us-container">
        <img className="reach-us-image" src="/images/getInTouch.png" alt="getInTouch-icon" />
        <div className="reach-us-text">REACH US</div>
      </div>
      <div className='form-container'>
        <div className="input-column">
          <div className="input-row">
            <input required className="e-input" type="text" placeholder="FIRST NAME" value={fname} onChange={handleFnameChange} />
            <input required className="e-input" type="text" placeholder="LAST NAME" value={lname} onChange={handleLnameChange} />
          </div>
          <div className="input-row">
            <input required className="e-input" type="email" placeholder="ENTER EMAIL" value={email} onChange={handleEmailChange} />
            <select required className="s-input-select" onChange={handleSelectChange} value={selected}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {!otpSent ? (
            <div className="input-row1">
              <input
                required
                className="s-input"
                type="text"
                name="mobile"
                placeholder="ENTER MOBILE NO."
                value={mobile}
                onChange={handleMobileChange}
              />
              <button className='r-otp-btn' type="button" onClick={handleGetOtp}>GET OTP</button>
            </div>
          ) : (
            <div className="input-row1">
              <input
                className="s-input"
                type="text"
                name="mobile"
                value={mobile}
                onChange={handleMobileChange}
                required
              />
            </div>
          )}
        </div>
        {otpSent && !otpVerified && (
          <div className="input-row1">
            <input
              className="s-input"
              type="text"
              placeholder="ENTER OTP"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
              required
            />
            <button className='r-otp-btn' type="button" onClick={handleVerifyOtp}>Verify OTP</button>
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

        <div className="input-row">
          <textarea required className="rsa-desc-input" type="text" placeholder="MESSAGE" name="description" value={message} onChange={handleMessageChange} />
        </div>
        <div className="rsa-row7">
          {/* <button className='rsa-btn' type="submit" onClick={handleSubmit}>Submit</button> */}
          <button className='rsa-btn' type="submit" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting.' : 'Submit'}
          </button>
          <button className='rsa-btn' type="button" onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div className="frame">
        <img src="/images/frame1.png" alt="Frame1" />
        <img src="/images/frame2.png" alt="frame2" />
        <img src="/images/frame3.png" alt="frame3" />
      </div>
    </div>
  );
}


const styles = {
  notificationContainer: {
    position: 'fixed',
    top: '100px',
    right: '0px',
    backgroundColor: 'green',
    color: 'white',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  notificationText: {
    margin: 0,
  },
};