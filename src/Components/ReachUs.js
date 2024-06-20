import React, { useState } from 'react';

export default function ReachUs() {
  const [selected, setSelected] = useState('SELECT YOUR BRANCH');
  const options = [
    { label: 'SELECT YOUR BRANCH', value: '' },
    { label: 'Topline Bangaluru', value: 'Topline Bangaluru' },
    { label: 'Banashankari', value: 'Banashankari' },
    { label: 'Rajeshwari Nagar', value: 'Rajeshwari Nagar' },
  ];

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleFnameChange = (newValue) => {
    setFname(newValue);
  };

  const handleLnameChange = (newValue) => {
    setLname(newValue);
  };
  const handlePnoneChange = (newValue) => {
    setPhone(newValue);
  };
  const handleEmailChange = (newValue) => {
    setEmail(newValue);
  };
  const handleSelectChange = (event) => {
    setSelected(event.target.value);
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
            <input className="e-input" type="text" placeholder="FIRST NAME" value={fname} onChange={handleFnameChange} />
            <input className="e-input" type="text" placeholder="LAST NAME" value={lname} onChange={handleLnameChange} />

          </div>
          <div className="input-row">
            <input className="e-input " type="text" placeholder="PHONE NUMBER" value={phone} onChange={handlePnoneChange} />
            <input className="e-input" type="email" placeholder="ENTER EMAIL" value={email} onChange={handleEmailChange} />
          </div>
          <div className="input-row">
            <select className='s-input' onChange={handleSelectChange} value={selected}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <input className="e-input mobile-input" type="text" placeholder="ENTER MOBILE NO."  />
            <button className='otp-btn' type="button">Get OTP</button>
          </div>
        </div>
        <div className="input-row">
          <textarea className="e-input text-area" type="text" placeholder="SUBJECT" />
          <textarea className="e-input text-area" type="text" placeholder="MESSAGE" />
        </div>
        <div className="input-row input-btn">
          <button className='btn' type="submit">Submit</button>
          <button className='btn' type="button">Reset</button>
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

